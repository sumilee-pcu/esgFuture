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
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { PapersService } from './papers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePaperDto } from './dto/create-paper.dto';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { QueryPaperDto } from './dto/query-paper.dto';

@ApiTags('papers')
@Controller('papers')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PapersController {
  constructor(private readonly papersService: PapersService) {}

  @Post()
  @ApiOperation({ summary: '논문 생성' })
  create(@Body() createPaperDto: CreatePaperDto, @Request() req) {
    return this.papersService.create(createPaperDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: '논문 목록 조회' })
  findAll(@Query() query: QueryPaperDto, @Request() req) {
    return this.papersService.findAll(query, req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: '논문 상세 조회' })
  findOne(@Param('id') id: string) {
    return this.papersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '논문 수정' })
  update(
    @Param('id') id: string,
    @Body() updatePaperDto: UpdatePaperDto,
    @Request() req,
  ) {
    return this.papersService.update(id, updatePaperDto, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '논문 삭제' })
  remove(@Param('id') id: string, @Request() req) {
    return this.papersService.remove(id, req.user.id);
  }

  @Post(':id/files')
  @ApiOperation({ summary: '논문 파일 업로드' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        fileType: {
          type: 'string',
          enum: ['manuscript', 'supplementary', 'revised'],
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('fileType') fileType: string,
    @Request() req,
  ) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    if (!fileType) {
      throw new BadRequestException('File type is required');
    }

    return this.papersService.uploadFile(id, file, req.user.id, fileType);
  }

  @Get(':id/files/:fileId/download')
  @ApiOperation({ summary: '논문 파일 다운로드 URL 생성' })
  async getDownloadUrl(
    @Param('id') id: string,
    @Param('fileId') fileId: string,
    @Request() req,
  ) {
    const url = await this.papersService.getDownloadUrl(id, fileId, req.user.id);
    return { url };
  }

  @Delete(':id/files/:fileId')
  @ApiOperation({ summary: '논문 파일 삭제' })
  async deleteFile(
    @Param('id') id: string,
    @Param('fileId') fileId: string,
    @Request() req,
  ) {
    await this.papersService.deleteFile(id, fileId, req.user.id);
    return { message: 'File deleted successfully' };
  }

  @Post(':id/submit')
  @ApiOperation({ summary: '논문 투고' })
  async submit(@Param('id') id: string, @Request() req) {
    return this.papersService.submit(id, req.user.id);
  }
}
