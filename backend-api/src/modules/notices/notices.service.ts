import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notice } from '../../database/entities/notice.entity';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { QueryNoticeDto } from './dto/query-notice.dto';

@Injectable()
export class NoticesService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto, authorId: string): Promise<Notice> {
    const notice = this.noticeRepository.create({
      ...createNoticeDto,
      authorId,
    });

    return this.noticeRepository.save(notice);
  }

  async findAll(query: QueryNoticeDto) {
    const { page = 1, limit = 10, category, search } = query;
    const skip = (page - 1) * limit;

    const queryBuilder = this.noticeRepository
      .createQueryBuilder('notice')
      .leftJoinAndSelect('notice.author', 'author');

    if (category) {
      queryBuilder.andWhere('notice.category = :category', { category });
    }

    if (search) {
      queryBuilder.andWhere(
        '(notice.title LIKE :search OR notice.content LIKE :search)',
        { search: `%${search}%` },
      );
    }

    const [notices, total] = await queryBuilder
      .orderBy('notice.isPinned', 'DESC')
      .addOrderBy('notice.createdAt', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    return {
      data: notices,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string): Promise<Notice> {
    const notice = await this.noticeRepository.findOne({
      where: { id },
      relations: ['author'],
    });

    if (!notice) {
      throw new NotFoundException(`Notice with ID ${id} not found`);
    }

    // Increment view count
    notice.viewCount += 1;
    await this.noticeRepository.save(notice);

    return notice;
  }

  async update(id: string, updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
    const notice = await this.findOne(id);

    Object.assign(notice, updateNoticeDto);

    return this.noticeRepository.save(notice);
  }

  async remove(id: string): Promise<void> {
    const notice = await this.findOne(id);
    await this.noticeRepository.remove(notice);
  }
}
