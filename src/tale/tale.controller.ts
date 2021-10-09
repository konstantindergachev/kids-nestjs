import { Controller, Get } from '@nestjs/common';
import { TaleService } from './tale.service';

@Controller('tales')
export class TaleController {
  constructor(private readonly taleService: TaleService) {}
  @Get()
  async findAll() {
    const tales = await this.taleService.findAll();
    return tales;
  }
}
