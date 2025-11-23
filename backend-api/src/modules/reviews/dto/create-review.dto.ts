import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, Min, Max, IsNumber } from 'class-validator';
import { ReviewDecision } from '../../../database/entities/review.entity';

export class CreateReviewDto {
  @ApiProperty({ example: '매우 우수한 논문입니다.', description: '심사 의견' })
  @IsString()
  @IsNotEmpty()
  comments: string;

  @ApiProperty({ example: 4.5, description: '독창성 점수 (1-5)' })
  @IsNumber()
  @Min(1)
  @Max(5)
  scoreOriginality: number;

  @ApiProperty({ example: 4.0, description: '방법론 점수 (1-5)' })
  @IsNumber()
  @Min(1)
  @Max(5)
  scoreMethodology: number;

  @ApiProperty({ example: 4.5, description: '결과 및 분석 점수 (1-5)' })
  @IsNumber()
  @Min(1)
  @Max(5)
  scoreResults: number;

  @ApiProperty({ example: 4.0, description: '표현 및 형식 점수 (1-5)' })
  @IsNumber()
  @Min(1)
  @Max(5)
  scorePresentation: number;

  @ApiProperty({ example: 'accept', enum: ReviewDecision, description: '심사 결과' })
  @IsEnum(ReviewDecision)
  @IsNotEmpty()
  decision: ReviewDecision;

  @ApiProperty({ example: '참고문헌 추가 필요', description: '수정 요청 사항', required: false })
  @IsOptional()
  @IsString()
  revisionRequests?: string;
}
