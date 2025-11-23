import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ConfirmPaymentDto {
  @ApiProperty({ example: 'payment-key-from-toss', description: '토스 결제 키' })
  @IsString()
  @IsNotEmpty()
  paymentKey: string;

  @ApiProperty({ example: 'order-id', description: '주문 ID' })
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty({ example: 50000, description: '결제 금액' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
