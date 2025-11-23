import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Paper } from './paper.entity';
import { User } from './user.entity';

export enum ReviewStatus {
  ASSIGNED = '배정됨',
  IN_PROGRESS = '진행중',
  COMPLETED = '완료',
}

export enum ReviewDecision {
  ACCEPT = '게재가',
  MINOR_REVISION = '수정후게재',
  MAJOR_REVISION = '수정후재심',
  REJECT = '게재불가',
}

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Paper, (paper) => paper.reviews)
  @JoinColumn({ name: 'paper_id' })
  paper: Paper;

  @Column({ name: 'paper_id' })
  paperId: string;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'reviewer_id' })
  reviewer: User;

  @Column({ name: 'reviewer_id' })
  reviewerId: string;

  @Column({ type: 'timestamp', name: 'assigned_at' })
  assignedAt: Date;

  @Column({ type: 'timestamp', name: 'due_date' })
  dueDate: Date;

  @Column({
    type: 'enum',
    enum: ReviewStatus,
    default: ReviewStatus.ASSIGNED,
  })
  status: ReviewStatus;

  @Column({
    type: 'enum',
    enum: ReviewDecision,
    nullable: true,
  })
  decision: ReviewDecision;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({ type: 'timestamp', nullable: true, name: 'submitted_at' })
  submittedAt: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
