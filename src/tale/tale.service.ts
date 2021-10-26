import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITaleResponse } from './interfaces/tale.interface';
import { ITalesResponse } from './interfaces/tales.interface';
import { TaleEntity } from './tale.entity';

@Injectable()
export class TaleService {
  constructor(
    @InjectRepository(TaleEntity)
    private readonly taleRepository: Repository<TaleEntity>,
  ) {}

  buildTaleResponce(tale: TaleEntity): ITaleResponse {
    return { tale };
  }

  async findAll(): Promise<ITalesResponse> {
    const tales = await this.taleRepository.find();
    return { tales };
  }

  async findOneBySlug(slug: string): Promise<TaleEntity> {
    return await this.taleRepository.findOne({ slug });
  }
}
