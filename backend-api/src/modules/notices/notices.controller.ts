import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { NoticesService } from './notices.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { QueryNoticeDto } from './dto/query-notice.dto';

@ApiTags('notices')
@Controller('notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '공지사항 작성 (관리자/편집자)' })
  create(@Body() createNoticeDto: CreateNoticeDto, @Request() req) {
    return this.noticesService.create(createNoticeDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: '공지사항 목록 조회' })
  findAll(@Query() query: QueryNoticeDto) {
    return this.noticesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: '공지사항 상세 조회' })
  findOne(@Param('id') id: string) {
    return this.noticesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '공지사항 수정 (관리자/편집자)' })
  update(@Param('id') id: string, @Body() updateNoticeDto: UpdateNoticeDto) {
    return this.noticesService.update(id, updateNoticeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '공지사항 삭제 (관리자/편집자)' })
  remove(@Param('id') id: string) {
    return this.noticesService.remove(id);
  }
}
