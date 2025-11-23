import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Paper, PaperStatus } from '../../database/entities/paper.entity';
import { Author } from '../../database/entities/author.entity';
import { PaperFile } from '../../database/entities/paper-file.entity';
import { R2StorageService } from './r2-storage.service';
import { CreatePaperDto } from './dto/create-paper.dto';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { QueryPaperDto } from './dto/query-paper.dto';

@Injectable()
export class PapersService {
  constructor(
    @InjectRepository(Paper)
    private readonly paperRepository: Repository<Paper>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(PaperFile)
    private readonly paperFileRepository: Repository<PaperFile>,
    private readonly r2StorageService: R2StorageService,
  ) {}

  async create(createPaperDto: CreatePaperDto, submitterId: string): Promise<Paper> {
    const paper = this.paperRepository.create({
      ...createPaperDto,
      submitterId,
      status: PaperStatus.DRAFT,
    });

    const savedPaper = await this.paperRepository.save(paper);

    // Create authors
    if (createPaperDto.authors && createPaperDto.authors.length > 0) {
      const authors = createPaperDto.authors.map((authorDto) =>
        this.authorRepository.create({
          ...authorDto,
          paperId: savedPaper.id,
        }),
      );
      await this.authorRepository.save(authors);
    }

    return this.findOne(savedPaper.id);
  }

  async findAll(query: QueryPaperDto, userId?: string) {
    const { page = 1, limit = 10, status, search, submitterId } = query;
    const skip = (page - 1) * limit;

    const queryBuilder = this.paperRepository
      .createQueryBuilder('paper')
      .leftJoinAndSelect('paper.submitter', 'submitter')
      .leftJoinAndSelect('paper.authors', 'authors')
      .leftJoinAndSelect('paper.files', 'files');

    if (status) {
      queryBuilder.andWhere('paper.status = :status', { status });
    }

    if (search) {
      queryBuilder.andWhere(
        '(paper.titleKo LIKE :search OR paper.titleEn LIKE :search OR paper.abstractKo LIKE :search OR paper.abstractEn LIKE :search)',
        { search: `%${search}%` },
      );
    }

    if (submitterId) {
      queryBuilder.andWhere('paper.submitterId = :submitterId', { submitterId });
    } else if (userId) {
      // If no submitterId specified but userId is provided, filter by user's papers
      queryBuilder.andWhere('paper.submitterId = :userId', { userId });
    }

    const [papers, total] = await queryBuilder
      .orderBy('paper.createdAt', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data: papers,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string): Promise<Paper> {
    const paper = await this.paperRepository.findOne({
      where: { id },
      relations: ['submitter', 'authors', 'files', 'reviews'],
    });

    if (!paper) {
      throw new NotFoundException(`Paper with ID ${id} not found`);
    }

    return paper;
  }

  async update(id: string, updatePaperDto: UpdatePaperDto, userId: string): Promise<Paper> {
    const paper = await this.findOne(id);

    if (paper.submitterId !== userId) {
      throw new BadRequestException('You can only update your own papers');
    }

    // Update paper
    Object.assign(paper, updatePaperDto);
    await this.paperRepository.save(paper);

    // Update authors if provided
    if (updatePaperDto.authors && updatePaperDto.authors.length > 0) {
      // Delete existing authors
      await this.authorRepository.delete({ paperId: id });

      // Create new authors
      const authors = updatePaperDto.authors.map((authorDto) =>
        this.authorRepository.create({
          ...authorDto,
          paperId: id,
        }),
      );
      await this.authorRepository.save(authors);
    }

    return this.findOne(id);
  }

  async remove(id: string, userId: string): Promise<void> {
    const paper = await this.findOne(id);

    if (paper.submitterId !== userId) {
      throw new BadRequestException('You can only delete your own papers');
    }

    // Delete files from R2
    if (paper.files && paper.files.length > 0) {
      for (const file of paper.files) {
        await this.r2StorageService.deleteFile(file.r2Path);
      }
    }

    await this.paperRepository.remove(paper);
  }

  async uploadFile(
    paperId: string,
    file: Express.Multer.File,
    userId: string,
    fileType: string,
  ): Promise<PaperFile> {
    const paper = await this.findOne(paperId);

    if (paper.submitterId !== userId) {
      throw new BadRequestException('You can only upload files to your own papers');
    }

    // Upload to R2
    const { key, size } = await this.r2StorageService.uploadFile(
      file,
      'papers',
      userId,
    );

    // Save file metadata
    const paperFile = this.paperFileRepository.create({
      paperId,
      fileName: file.originalname,
      fileType,
      r2Path: key,
      fileSize: size,
      version: 1,
    });

    return this.paperFileRepository.save(paperFile);
  }

  async getDownloadUrl(paperId: string, fileId: string, userId: string): Promise<string> {
    const paper = await this.findOne(paperId);
    const file = paper.files?.find((f) => f.id === fileId);

    if (!file) {
      throw new NotFoundException(`File with ID ${fileId} not found`);
    }

    // Generate pre-signed URL
    return this.r2StorageService.getDownloadUrl(file.r2Path);
  }

  async deleteFile(paperId: string, fileId: string, userId: string): Promise<void> {
    const paper = await this.findOne(paperId);

    if (paper.submitterId !== userId) {
      throw new BadRequestException('You can only delete files from your own papers');
    }

    const file = paper.files?.find((f) => f.id === fileId);

    if (!file) {
      throw new NotFoundException(`File with ID ${fileId} not found`);
    }

    // Delete from R2
    await this.r2StorageService.deleteFile(file.r2Path);

    // Delete from database
    await this.paperFileRepository.remove(file);
  }

  async submit(id: string, userId: string): Promise<Paper> {
    const paper = await this.findOne(id);

    if (paper.submitterId !== userId) {
      throw new BadRequestException('You can only submit your own papers');
    }

    if (paper.status !== PaperStatus.DRAFT) {
      throw new BadRequestException('Only draft papers can be submitted');
    }

    if (!paper.files || paper.files.length === 0) {
      throw new BadRequestException('Please upload at least one file before submitting');
    }

    paper.status = PaperStatus.SUBMITTED;
    paper.submittedAt = new Date();

    return this.paperRepository.save(paper);
  }
}
