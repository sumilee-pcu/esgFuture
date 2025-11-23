import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { PaperStatus } from '../../../database/entities/paper.entity';

export class QueryPaperDto {
  @ApiProperty({ required: false, description: '페이지 번호 (기본: 1)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ required: false, description: '페이지당 항목 수 (기본: 10)' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @ApiProperty({ required: false, enum: PaperStatus, description: '논문 상태' })
  @IsOptional()
  @IsEnum(PaperStatus)
  status?: PaperStatus;

  @ApiProperty({ required: false, description: '검색어 (제목, 초록)' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ required: false, description: '투고자 ID' })
  @IsOptional()
  @IsString()
  submitterId?: string;
}
