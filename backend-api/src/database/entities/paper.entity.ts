import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Author } from './author.entity';
import { PaperFile } from './paper-file.entity';
import { Review } from './review.entity';

export enum SubmissionType {
  REGULAR = '일반',
  URGENT = '긴급',
}

export enum Language {
  KOREAN = '국문',
  ENGLISH = '영문',
}

export enum PaperStatus {
  DRAFT = '작성중',
  SUBMITTED = '투고완료',
  IN_REVIEW = '심사중',
  REVISION_REQUESTED = '수정요청',
  ACCEPTED = '게재확정',
  REJECTED = '게재불가',
}

@Entity('papers')
export class Paper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: SubmissionType,
    name: 'submission_type',
  })
  submissionType: SubmissionType;

  @Column({
    type: 'enum',
    enum: Language,
  })
  language: Language;

  @Column({ name: 'title_ko' })
  titleKo: string;

  @Column({ name: 'title_en' })
  titleEn: string;

  @Column({ type: 'text', name: 'abstract_ko' })
  abstractKo: string;

  @Column({ type: 'text', name: 'abstract_en' })
  abstractEn: string;

  @Column({ type: 'simple-array' })
  keywords: string[];

  @Column({ name: 'research_field' })
  researchField: string;

  @Column({ default: false, name: 'has_funding' })
  hasFunding: boolean;

  @Column({ type: 'text', nullable: true, name: 'funding_info' })
  fundingInfo: string;

  @Column({
    type: 'enum',
    enum: PaperStatus,
    default: PaperStatus.DRAFT,
  })
  status: PaperStatus;

  @Column({ type: 'timestamp', nullable: true, name: 'submitted_at' })
  submittedAt: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'accepted_at' })
  acceptedAt: Date;

  @Column({ nullable: true, name: 'published_volume' })
  publishedVolume: string;

  @Column({ nullable: true, name: 'published_issue' })
  publishedIssue: string;

  @ManyToOne(() => User, (user) => user.papers)
  @JoinColumn({ name: 'submitter_id' })
  submitter: User;

  @Column({ name: 'submitter_id' })
  submitterId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations
  @OneToMany(() => Author, (author) => author.paper, { cascade: true })
  authors: Author[];

  @OneToMany(() => PaperFile, (file) => file.paper, { cascade: true })
  files: PaperFile[];

  @OneToMany(() => Review, (review) => review.paper)
  reviews: Review[];
}
