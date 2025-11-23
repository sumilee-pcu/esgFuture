import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsEmail } from 'class-validator';
import { MemberType } from '../../../database/entities/user.entity';

export class UpdateUserDto {
  @ApiProperty({ example: '홍길동', description: '이름 (국문)', required: false })
  @IsOptional()
  @IsString()
  nameKo?: string;

  @ApiProperty({ example: 'Hong Gil-dong', description: '이름 (영문)', required: false })
  @IsOptional()
  @IsString()
  nameEn?: string;

  @ApiProperty({ example: '서울대학교', description: '소속 기관', required: false })
  @IsOptional()
  @IsString()
  affiliation?: string;

  @ApiProperty({ example: '교수', description: '직위', required: false })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ example: '010-1234-5678', description: '연락처', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: '서울시 강남구', description: '주소', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ enum: MemberType, description: '회원 유형', required: false })
  @IsOptional()
  @IsEnum(MemberType)
  memberType?: MemberType;
}
