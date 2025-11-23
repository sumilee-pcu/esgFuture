import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Paper } from './paper.entity';

export enum PaymentType {
  MEMBERSHIP = '연회비',
  REVIEW_FEE = '심사료',
  PUBLICATION_FEE = '게재료',
}

export enum PaymentStatus {
  PENDING = '대기',
  COMPLETED = '완료',
  FAILED = '실패',
  REFUNDED = '환불',
}

export enum PaymentMethod {
  CARD = '카드',
  TRANSFER = '계좌이체',
  BANK_DEPOSIT = '무통장',
}

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.payments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => Paper, { nullable: true })
  @JoinColumn({ name: 'paper_id' })
  paper: Paper;

  @Column({ name: 'paper_id', nullable: true })
  paperId: string;

  @Column({
    type: 'enum',
    enum: PaymentType,
    name: 'payment_type',
  })
  paymentType: PaymentType;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    nullable: true,
    name: 'payment_method',
  })
  paymentMethod: PaymentMethod;

  @Column({ nullable: true, name: 'payment_key' })
  paymentKey: string;

  @Column({ nullable: true, name: 'order_id' })
  orderId: string;

  @Column({ type: 'timestamp', nullable: true, name: 'paid_at' })
  paidAt: Date;

  @Column({ nullable: true, name: 'receipt_url', type: 'text' })
  receiptUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
