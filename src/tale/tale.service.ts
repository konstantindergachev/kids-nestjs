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

  async findAllFirstPages(): Promise<TaleEntity[]> {
    const tales = await this.taleRepository.find({
      select: ['id', 'slug', 'title', 'artist', 'description', 'couplets'],
    });
    const updTales = tales.map((tale) => {
      if (tale.couplets) {
        tale.couplets = tale.couplets.slice(0, 1);
        return tale;
      }
      return tale;
    });
    return updTales;
  }

  async findAll(): Promise<TaleEntity[]> {
    const tales = await this.taleRepository.find();
    return tales;
  }

  async findOneBySlug(slug: string): Promise<TaleEntity> {
    return await this.taleRepository.findOne({ slug });
  }
}
