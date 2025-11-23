import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PapersService } from './papers.service';
import { PapersController } from './papers.controller';
import { R2StorageService } from './r2-storage.service';
import { Paper } from '../../database/entities/paper.entity';
import { Author } from '../../database/entities/author.entity';
import { PaperFile } from '../../database/entities/paper-file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paper, Author, PaperFile]),
    ConfigModule,
  ],
  controllers: [PapersController],
  providers: [PapersService, R2StorageService],
  exports: [PapersService],
})
export class PapersModule {}
