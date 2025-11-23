import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateReviewDto } from './dto/create-review.dto';
import { AssignReviewerDto } from './dto/assign-reviewer.dto';

@ApiTags('reviews')
@Controller('reviews')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('assign')
  @ApiOperation({ summary: '심사자 배정 (편집자/관리자)' })
  assignReviewer(@Body() assignReviewerDto: AssignReviewerDto) {
    return this.reviewsService.assignReviewer(assignReviewerDto);
  }

  @Post(':id/submit')
  @ApiOperation({ summary: '심사 의견 제출' })
  submitReview(
    @Param('id') id: string,
    @Body() createReviewDto: CreateReviewDto,
    @Request() req,
  ) {
    return this.reviewsService.submitReview(id, createReviewDto, req.user.id);
  }

  @Get('paper/:paperId')
  @ApiOperation({ summary: '논문의 모든 심사 조회' })
  findReviewsByPaper(@Param('paperId') paperId: string) {
    return this.reviewsService.findReviewsByPaper(paperId);
  }

  @Get('my-reviews')
  @ApiOperation({ summary: '내가 맡은 심사 목록' })
  findMyReviews(@Request() req) {
    return this.reviewsService.findReviewsByReviewer(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: '심사 상세 조회' })
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '심사 삭제 (관리자)' })
  remove(@Param('id') id: string) {
    return this.reviewsService.removeReview(id);
  }
}
