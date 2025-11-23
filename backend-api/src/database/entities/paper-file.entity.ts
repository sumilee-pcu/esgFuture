import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Paper } from './paper.entity';

export enum FileType {
  MANUSCRIPT = '본문',
  REVIEW = '심사의견',
  COPYRIGHT = '동의서',
  PLAGIARISM = '표절검사',
  CONFLICT = '이해상충',
}

@Entity('paper_files')
export class PaperFile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Paper, (paper) => paper.files, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'paper_id' })
  paper: Paper;

  @Column({ name: 'paper_id' })
  paperId: string;

  @Column({
    type: 'enum',
    enum: FileType,
    name: 'file_type',
  })
  fileType: FileType;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_path' })
  filePath: string;

  @Column({ name: 'file_size' })
  fileSize: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'mime_type' })
  mimeType: string;

  @Column({ default: 1 })
  version: number;

  @CreateDateColumn({ name: 'uploaded_at' })
  uploadedAt: Date;
}
