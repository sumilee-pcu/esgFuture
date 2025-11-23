import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@ApiTags('payments')
@Controller('payments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @ApiOperation({ summary: '결제 요청 생성' })
  create(@Body() createPaymentDto: CreatePaymentDto, @Request() req) {
    return this.paymentsService.createPayment(createPaymentDto, req.user.id);
  }

  @Post('confirm')
  @ApiOperation({ summary: '결제 승인' })
  confirm(@Body() confirmPaymentDto: ConfirmPaymentDto) {
    return this.paymentsService.confirmPayment(confirmPaymentDto);
  }

  @Post(':id/cancel')
  @ApiOperation({ summary: '결제 취소' })
  cancel(@Param('id') id: string, @Body('cancelReason') cancelReason: string) {
    return this.paymentsService.cancelPayment(id, cancelReason);
  }

  @Get()
  @ApiOperation({ summary: '결제 내역 조회' })
  findAll(@Request() req, @Query('userId') userId?: string) {
    // Regular users can only see their own payments
    // Admins can see all payments or filter by userId
    const userIdToQuery = req.user.isAdmin ? userId : req.user.id;
    return this.paymentsService.findAll(userIdToQuery);
  }

  @Get('order/:orderId')
  @ApiOperation({ summary: '주문 ID로 결제 조회' })
  findByOrderId(@Param('orderId') orderId: string) {
    return this.paymentsService.findByOrderId(orderId);
  }

  @Get(':id')
  @ApiOperation({ summary: '결제 상세 조회' })
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }
}
