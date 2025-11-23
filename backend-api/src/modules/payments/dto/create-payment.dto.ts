import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional, Min } from 'class-validator';
import { PaymentType } from '../../../database/entities/payment.entity';

export class CreatePaymentDto {
  @ApiProperty({ example: 'membership', enum: PaymentType, description: '결제 유형' })
  @IsEnum(PaymentType)
  @IsNotEmpty()
  paymentType: PaymentType;

  @ApiProperty({ example: 50000, description: '결제 금액' })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ example: 'paper-id', description: '논문 ID (논문 관련 결제인 경우)', required: false })
  @IsOptional()
  @IsString()
  paperId?: string;

  @ApiProperty({ example: '2024년 회비', description: '결제 설명', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
