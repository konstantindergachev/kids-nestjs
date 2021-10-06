import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaleEntity } from './tale.entity';

@Injectable()
export class TaleService {
  constructor(
    @InjectRepository(TaleEntity)
    private readonly taleRepository: Repository<TaleEntity>,
  ) {}

  findAll() {
    return this.taleRepository.find();
  }
}
