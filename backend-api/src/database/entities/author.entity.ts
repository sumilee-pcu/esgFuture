import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Paper } from './paper.entity';
import { User } from './user.entity';

export enum AuthorType {
  FIRST = '제1저자',
  CO = '공동저자',
}

@Entity('paper_authors')
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Paper, (paper) => paper.authors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'paper_id' })
  paper: Paper;

  @Column({ name: 'paper_id' })
  paperId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id', nullable: true })
  userId: string;

  @Column({ name: 'name_ko' })
  nameKo: string;

  @Column({ name: 'name_en' })
  nameEn: string;

  @Column({ name: 'affiliation_ko' })
  affiliationKo: string;

  @Column({ name: 'affiliation_en' })
  affiliationEn: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  orcid: string;

  @Column({
    type: 'enum',
    enum: AuthorType,
    name: 'author_type',
  })
  authorType: AuthorType;

  @Column({ name: 'author_order' })
  authorOrder: number;

  @Column({ default: false, name: 'is_corresponding' })
  isCorresponding: boolean;
}
