import { Controller, Get } from '@nestjs/common';
import { TaleService } from './tale.service';

@Controller('tales')
export class TaleController {
  constructor(private readonly taleService: TaleService) {}
  @Get()
  findAll() {
    return this.taleService.findAll();
  }
}
