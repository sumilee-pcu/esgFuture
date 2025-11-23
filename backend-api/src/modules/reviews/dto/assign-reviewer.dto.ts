import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AssignReviewerDto {
  @ApiProperty({ example: 'paper-id', description: '논문 ID' })
  @IsString()
  @IsNotEmpty()
  paperId: string;

  @ApiProperty({ example: 'reviewer-id', description: '심사자 ID' })
  @IsString()
  @IsNotEmpty()
  reviewerId: string;
}
