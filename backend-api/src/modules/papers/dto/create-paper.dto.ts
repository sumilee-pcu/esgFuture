import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaperType, PaperLanguage } from '../../../database/entities/paper.entity';

class CreateAuthorDto {
  @ApiProperty({ example: '홍길동', description: '저자명' })
  @IsString()
  @IsNotEmpty()
  nameKo: string;

  @ApiProperty({ example: 'Hong Gil-dong', description: '저자명 (영문)' })
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @ApiProperty({ example: 'gildong@example.com', description: '이메일' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '서울대학교', description: '소속 기관' })
  @IsString()
  @IsNotEmpty()
  affiliation: string;

  @ApiProperty({ example: 'first', enum: ['first', 'corresponding', 'coauthor'], description: '저자 유형' })
  @IsString()
  @IsNotEmpty()
  authorType: string;

  @ApiProperty({ example: 1, description: '저자 순서' })
  ordering: number;

  @ApiProperty({ example: 'user-id', description: '회원 ID (선택)', required: false })
  @IsOptional()
  @IsString()
  userId?: string;
}

export class CreatePaperDto {
  @ApiProperty({ example: 'regular', enum: ['regular', 'expedited'], description: '투고 유형' })
  @IsEnum(PaperType)
  @IsNotEmpty()
  submissionType: PaperType;

  @ApiProperty({ example: 'korean', enum: ['korean', 'english'], description: '논문 언어' })
  @IsEnum(PaperLanguage)
  @IsNotEmpty()
  language: PaperLanguage;

  @ApiProperty({ example: 'AI 기반 산업 융합 연구', description: '논문 제목 (국문)' })
  @IsString()
  @IsNotEmpty()
  titleKo: string;

  @ApiProperty({ example: 'AI-based Industry Convergence Research', description: '논문 제목 (영문)', required: false })
  @IsString()
  @IsOptional()
  titleEn?: string;

  @ApiProperty({ example: '본 연구는...', description: '초록 (국문)' })
  @IsString()
  @IsNotEmpty()
  abstractKo: string;

  @ApiProperty({ example: 'This research...', description: '초록 (영문)', required: false })
  @IsString()
  @IsOptional()
  abstractEn?: string;

  @ApiProperty({ example: ['AI', '산업융합', '스마트팩토리'], description: '키워드' })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  keywords: string[];

  @ApiProperty({ type: [CreateAuthorDto], description: '저자 정보' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAuthorDto)
  authors: CreateAuthorDto[];
}
