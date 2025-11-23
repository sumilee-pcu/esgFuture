import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateNoticeDto {
  @ApiProperty({ example: '2024년 봄 학술대회 안내', description: '공지사항 제목' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '2024년 봄 학술대회가 5월 15일에 개최됩니다.', description: '공지사항 내용' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 'event', description: '카테고리 (공지/행사/심사안내 등)', required: false })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ example: true, description: '고정 여부', required: false })
  @IsOptional()
  @IsBoolean()
  isPinned?: boolean;
}
