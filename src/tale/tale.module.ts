import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaleController } from './tale.controller';
import { TaleEntity } from './tale.entity';
import { TaleService } from './tale.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaleEntity])],
  controllers: [TaleController],
  providers: [TaleService],
})
export class TaleModule {}
