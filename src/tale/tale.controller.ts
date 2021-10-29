import { IExpressRequest } from '@app/interfaces/express-request.interface';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ITaleResponse } from './interfaces/tale.interface';
import { ITalesResponse } from './interfaces/tales.interface';
import { TaleService } from './tale.service';

@Controller('tales')
export class TaleController {
  constructor(private readonly taleService: TaleService) {}

  @Get('first-pages')
  @UseGuards(AuthGuard)
  async findAllFirstPages(
    @Req() req: IExpressRequest,
  ): Promise<ITalesResponse> {
    const username = `${req.user.firstname} ${req.user.lastname}`;
    const tales = await this.taleService.findAllFirstPages();
    return { tales, username };
  }
  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Req() req: IExpressRequest): Promise<ITalesResponse> {
    const username = `${req.user.firstname} ${req.user.lastname}`;
    const tales = await this.taleService.findAll();
    return { tales, username };
  }
  @Get(':slug')
  @UseGuards(AuthGuard)
  async findOneBySlug(
    @Param('slug') slug: string,
    @Req() req: IExpressRequest,
  ): Promise<ITaleResponse> {
    const username = `${req.user.firstname} ${req.user.lastname}`;
    const tale = await this.taleService.findOneBySlug(slug);
    return { tale, username };
  }
}
