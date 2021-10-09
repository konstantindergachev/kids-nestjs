import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITalesResponse } from './interfaces/tales.interface';
import { TaleEntity } from './tale.entity';

@Injectable()
export class TaleService {
  constructor(
    @InjectRepository(TaleEntity)
    private readonly taleRepository: Repository<TaleEntity>,
  ) {}

  async findAll(): Promise<ITalesResponse> {
    const tales = await this.taleRepository.find();
    return { tales };
  }
}
