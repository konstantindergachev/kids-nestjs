import { Controller, Get } from '@nestjs/common';
import { ITalesResponse } from './interfaces/tales.interface';
import { TaleService } from './tale.service';

@Controller('tales')
export class TaleController {
  constructor(private readonly taleService: TaleService) {}
  @Get()
  async findAll(): Promise<ITalesResponse> {
    return await this.taleService.findAll();
  }
}
