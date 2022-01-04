import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LetterController } from './letter.controller';
import { LetterEntity } from './letter.entity';
import { LetterService } from './letter.service';

@Module({
  imports: [TypeOrmModule.forFeature([LetterEntity])],
  controllers: [LetterController],
  providers: [LetterService],
  exports: [LetterService],
})
export class LetterModule {}
