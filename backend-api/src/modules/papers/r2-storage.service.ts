import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { createR2Client } from '@/config/r2.config';

@Injectable()
export class R2StorageService {
  private readonly logger = new Logger(R2StorageService.name);
  private readonly r2Client: S3Client;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.r2Client = createR2Client(configService);
    this.bucketName = this.configService.get<string>('R2_BUCKET_NAME');
  }

  /**
   * 파일 업로드
   */
  async uploadFile(
    file: Express.Multer.File,
    folder: string,
    userId: string,
  ): Promise<{ key: string; size: number }> {
    const timestamp = Date.now();
    const key = `${folder}/${userId}/${timestamp}-${file.originalname}`;

    try {
      const upload = new Upload({
        client: this.r2Client,
        params: {
          Bucket: this.bucketName,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
          Metadata: {
            uploadedBy: userId,
            uploadedAt: new Date().toISOString(),
            originalName: file.originalname,
          },
        },
      });

      await upload.done();

      this.logger.log(`File uploaded successfully: ${key}`);

      return {
        key,
        size: file.size,
      };
    } catch (error) {
      this.logger.error(`Failed to upload file: ${error.message}`, error.stack);
      throw new Error('Failed to upload file to storage');
    }
  }

  /**
   * Pre-signed URL 생성 (다운로드용)
   */
  async getDownloadUrl(key: string, expiresIn = 3600): Promise<string> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      const url = await getSignedUrl(this.r2Client, command, { expiresIn });

      this.logger.log(`Generated download URL for: ${key}`);

      return url;
    } catch (error) {
      this.logger.error(`Failed to generate download URL: ${error.message}`, error.stack);
      throw new Error('Failed to generate download URL');
    }
  }

  /**
   * 파일 삭제
   */
  async deleteFile(key: string): Promise<void> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.r2Client.send(command);

      this.logger.log(`File deleted successfully: ${key}`);
    } catch (error) {
      this.logger.error(`Failed to delete file: ${error.message}`, error.stack);
      throw new Error('Failed to delete file from storage');
    }
  }

  /**
   * 여러 파일 삭제
   */
  async deleteFiles(keys: string[]): Promise<void> {
    const deletePromises = keys.map((key) => this.deleteFile(key));
    await Promise.all(deletePromises);
  }

  /**
   * Public URL 생성 (R2 Public Bucket인 경우)
   */
  getPublicUrl(key: string): string {
    const publicUrl = this.configService.get<string>('R2_PUBLIC_URL');

    if (!publicUrl) {
      throw new Error('R2_PUBLIC_URL is not configured');
    }

    return `${publicUrl}/${key}`;
  }
}
