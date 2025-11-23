import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryNoticeDto {
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

  @ApiProperty({ required: false, description: '카테고리' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ required: false, description: '검색어 (제목, 내용)' })
  @IsOptional()
  @IsString()
  search?: string;
}
