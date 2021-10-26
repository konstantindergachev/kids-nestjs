import { Controller, Get, Param } from '@nestjs/common';
import { ITaleResponse } from './interfaces/tale.interface';
import { ITalesResponse } from './interfaces/tales.interface';
import { TaleService } from './tale.service';

@Controller('tales')
export class TaleController {
  constructor(private readonly taleService: TaleService) {}
  @Get('first-pages')
  async findAllFirstPages(): Promise<ITalesResponse> {
    return await this.taleService.findAllFirstPages();
  }
  @Get()
  async findAll(): Promise<ITalesResponse> {
    return await this.taleService.findAll();
  }
  @Get(':slug')
  async findOneBySlug(@Param('slug') slug: string): Promise<ITaleResponse> {
    const tale = await this.taleService.findOneBySlug(slug);
    return this.taleService.buildTaleResponce(tale);
  }
}
