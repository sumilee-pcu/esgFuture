import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Paper } from './paper.entity';
import { Review } from './review.entity';
import { Payment } from './payment.entity';

export enum MemberType {
  REGULAR = '일반',
  STUDENT = '학생',
  LIFETIME = '평생',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ name: 'name_ko' })
  nameKo: string;

  @Column({ name: 'name_en' })
  nameEn: string;

  @Column({ name: 'affiliation_ko' })
  affiliationKo: string;

  @Column({ name: 'affiliation_en' })
  affiliationEn: string;

  @Column()
  position: string;

  @Column()
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ nullable: true })
  orcid: string;

  @Column({
    type: 'enum',
    enum: MemberType,
    default: MemberType.REGULAR,
    name: 'member_type',
  })
  memberType: MemberType;

  @Column({ type: 'timestamp', nullable: true, name: 'membership_expiry' })
  membershipExpiry: Date;

  @Column({ default: false, name: 'is_reviewer' })
  isReviewer: boolean;

  @Column({ default: false, name: 'is_editor' })
  isEditor: boolean;

  @Column({ default: false, name: 'is_admin' })
  isAdmin: boolean;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @Column({ nullable: true, name: 'email_verified_at', type: 'timestamp' })
  emailVerifiedAt: Date;

  @Column({ nullable: true, name: 'refresh_token' })
  @Exclude()
  refreshToken: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relations
  @OneToMany(() => Paper, (paper) => paper.submitter)
  papers: Paper[];

  @OneToMany(() => Review, (review) => review.reviewer)
  reviews: Review[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];
}
