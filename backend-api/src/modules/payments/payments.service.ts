import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Payment, PaymentStatus } from '../../database/entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Injectable()
export class PaymentsService {
  private readonly tossSecretKey: string;
  private readonly tossApiUrl = 'https://api.tosspayments.com/v1';

  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    private readonly configService: ConfigService,
  ) {
    this.tossSecretKey = this.configService.get<string>('TOSS_SECRET_KEY');
  }

  async createPayment(createPaymentDto: CreatePaymentDto, userId: string): Promise<Payment> {
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const payment = this.paymentRepository.create({
      ...createPaymentDto,
      userId,
      orderId,
      status: PaymentStatus.PENDING,
    });

    return this.paymentRepository.save(payment);
  }

  async confirmPayment(confirmPaymentDto: ConfirmPaymentDto): Promise<Payment> {
    const { paymentKey, orderId, amount } = confirmPaymentDto;

    // Find payment by orderId
    const payment = await this.paymentRepository.findOne({
      where: { orderId },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    if (payment.amount !== amount) {
      throw new BadRequestException('Payment amount mismatch');
    }

    try {
      // Confirm payment with Toss Payments API
      const response = await axios.post(
        `${this.tossApiUrl}/payments/confirm`,
        {
          paymentKey,
          orderId,
          amount,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(this.tossSecretKey + ':').toString('base64')}`,
            'Content-Type': 'application/json',
          },
        },
      );

      // Update payment with Toss response
      payment.paymentKey = paymentKey;
      payment.status = PaymentStatus.COMPLETED;
      payment.paidAt = new Date();
      payment.tossPaymentData = response.data;

      return this.paymentRepository.save(payment);
    } catch (error) {
      // Update payment as failed
      payment.status = PaymentStatus.FAILED;
      await this.paymentRepository.save(payment);

      throw new BadRequestException(
        error.response?.data?.message || 'Payment confirmation failed',
      );
    }
  }

  async cancelPayment(paymentId: string, cancelReason: string): Promise<Payment> {
    const payment = await this.findOne(paymentId);

    if (payment.status !== PaymentStatus.COMPLETED) {
      throw new BadRequestException('Only completed payments can be cancelled');
    }

    try {
      // Cancel payment with Toss Payments API
      await axios.post(
        `${this.tossApiUrl}/payments/${payment.paymentKey}/cancel`,
        {
          cancelReason,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(this.tossSecretKey + ':').toString('base64')}`,
            'Content-Type': 'application/json',
          },
        },
      );

      payment.status = PaymentStatus.CANCELLED;

      return this.paymentRepository.save(payment);
    } catch (error) {
      throw new BadRequestException(
        error.response?.data?.message || 'Payment cancellation failed',
      );
    }
  }

  async findAll(userId?: string): Promise<Payment[]> {
    const query: any = {};

    if (userId) {
      query.userId = userId;
    }

    return this.paymentRepository.find({
      where: query,
      relations: ['user', 'paper'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { id },
      relations: ['user', 'paper'],
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }

  async findByOrderId(orderId: string): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { orderId },
      relations: ['user', 'paper'],
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }
}
