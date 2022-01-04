import { Body, Controller, Post } from '@nestjs/common';
import { CreateLetterDto } from './dto/create-letter.dto';
import { ILetterCreateResponse } from './interfaces/letter-response.interface';
import { MAGIC_LETTER_SUCCESS } from './letter.constants';
import { LetterService } from './letter.service';

@Controller('letters')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @Post('/')
  async createLetter(
    @Body() createLetterDto: CreateLetterDto,
  ): Promise<ILetterCreateResponse> {
    await this.letterService.createLetter(createLetterDto);
    return { success: true, message: MAGIC_LETTER_SUCCESS };
  }
}
