import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLetterDto } from './dto/create-letter.dto';
import { MAGIC_EMAIL_TAKEN_ERROR } from './letter.constants';
import { LetterEntity } from './letter.entity';

@Injectable()
export class LetterService {
  constructor(
    @InjectRepository(LetterEntity)
    private readonly letterRepository: Repository<LetterEntity>,
  ) {}

  async createLetter(createLetterDto: CreateLetterDto): Promise<LetterEntity> {
    const errorsResponse = { errors: {} };

    const letterByEmail = await this.letterRepository.findOne({
      magic_email: createLetterDto.magic_email,
    });

    if (letterByEmail) {
      errorsResponse.errors['magic_email'] = MAGIC_EMAIL_TAKEN_ERROR;
      throw new HttpException(errorsResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const letter = {
      ...createLetterDto,
      magic_number: Number(createLetterDto.magic_number),
    };

    const newLetter = new LetterEntity();
    Object.assign(newLetter, letter);

    const savedLetter = await this.letterRepository.save(newLetter);

    return savedLetter;
  }
}
