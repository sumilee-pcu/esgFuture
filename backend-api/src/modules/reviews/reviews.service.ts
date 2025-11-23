import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review, ReviewStatus, ReviewDecision } from '../../database/entities/review.entity';
import { Paper, PaperStatus } from '../../database/entities/paper.entity';
import { User } from '../../database/entities/user.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { AssignReviewerDto } from './dto/assign-reviewer.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(Paper)
    private readonly paperRepository: Repository<Paper>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async assignReviewer(assignReviewerDto: AssignReviewerDto): Promise<Review> {
    const { paperId, reviewerId } = assignReviewerDto;

    const paper = await this.paperRepository.findOne({ where: { id: paperId } });
    if (!paper) {
      throw new NotFoundException('Paper not found');
    }

    const reviewer = await this.userRepository.findOne({ where: { id: reviewerId } });
    if (!reviewer) {
      throw new NotFoundException('Reviewer not found');
    }

    if (!reviewer.isReviewer && !reviewer.isEditor) {
      throw new BadRequestException('User is not authorized to review papers');
    }

    // Check if reviewer is already assigned
    const existingReview = await this.reviewRepository.findOne({
      where: { paperId, reviewerId },
    });

    if (existingReview) {
      throw new BadRequestException('Reviewer is already assigned to this paper');
    }

    const review = this.reviewRepository.create({
      paperId,
      reviewerId,
      status: ReviewStatus.PENDING,
    });

    // Update paper status to IN_REVIEW if not already
    if (paper.status === PaperStatus.SUBMITTED) {
      paper.status = PaperStatus.IN_REVIEW;
      await this.paperRepository.save(paper);
    }

    return this.reviewRepository.save(review);
  }

  async submitReview(
    reviewId: string,
    createReviewDto: CreateReviewDto,
    reviewerId: string,
  ): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: { id: reviewId },
      relations: ['paper'],
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    if (review.reviewerId !== reviewerId) {
      throw new BadRequestException('You can only submit your own reviews');
    }

    if (review.status === ReviewStatus.COMPLETED) {
      throw new BadRequestException('Review has already been submitted');
    }

    Object.assign(review, {
      ...createReviewDto,
      status: ReviewStatus.COMPLETED,
      submittedAt: new Date(),
    });

    const savedReview = await this.reviewRepository.save(review);

    // Check if all reviews are completed
    await this.checkAndUpdatePaperStatus(review.paperId);

    return savedReview;
  }

  async findReviewsByPaper(paperId: string): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { paperId },
      relations: ['reviewer'],
      order: { createdAt: 'DESC' },
    });
  }

  async findReviewsByReviewer(reviewerId: string): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { reviewerId },
      relations: ['paper', 'paper.submitter'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: { id },
      relations: ['paper', 'reviewer'],
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return review;
  }

  private async checkAndUpdatePaperStatus(paperId: string): Promise<void> {
    const reviews = await this.reviewRepository.find({ where: { paperId } });

    const allCompleted = reviews.every((r) => r.status === ReviewStatus.COMPLETED);

    if (!allCompleted || reviews.length === 0) {
      return;
    }

    // Calculate overall decision based on all reviews
    const acceptCount = reviews.filter((r) => r.decision === ReviewDecision.ACCEPT).length;
    const rejectCount = reviews.filter((r) => r.decision === ReviewDecision.REJECT).length;
    const revisionCount = reviews.filter(
      (r) => r.decision === ReviewDecision.MINOR_REVISION || r.decision === ReviewDecision.MAJOR_REVISION,
    ).length;

    const paper = await this.paperRepository.findOne({ where: { id: paperId } });

    if (!paper) {
      return;
    }

    // Decision logic: if any reject, paper is rejected
    // If any revision needed, request revision
    // If all accept, paper is accepted
    if (rejectCount > 0) {
      paper.status = PaperStatus.REJECTED;
    } else if (revisionCount > 0) {
      paper.status = PaperStatus.REVISION_REQUESTED;
    } else if (acceptCount === reviews.length) {
      paper.status = PaperStatus.ACCEPTED;
    }

    await this.paperRepository.save(paper);
  }

  async removeReview(reviewId: string): Promise<void> {
    const review = await this.findOne(reviewId);
    await this.reviewRepository.remove(review);
  }
}
