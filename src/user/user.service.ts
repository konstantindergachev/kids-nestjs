import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { EMAIL_TAKEN_ERROR, CREDENTIALS_ERROR } from './user.constants';
import { UserEntity } from './user.entity';
import { compare } from 'bcrypt';
import { NewsUserDto } from './dto/news-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly mailerService: MailerService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const errorsResponse = { errors: {} };

    const userByEmail = await this.userRepository.findOne({
      email: createUserDto.email,
    });

    if (userByEmail) {
      errorsResponse.errors['email'] = EMAIL_TAKEN_ERROR;
      throw new HttpException(errorsResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    const user = await this.userRepository.save(newUser);

    delete user.password;
    return user;
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const errorResponse = {
      errors: { message: CREDENTIALS_ERROR },
    };

    const user = await this.userRepository.findOne(
      {
        email: loginUserDto.email,
      },
      {
        select: ['id', 'firstname', 'lastname', 'email', 'password'],
      },
    );

    if (!user) {
      throw new HttpException(errorResponse, HttpStatus.NOT_FOUND);
    }

    const isPasswordCorrect = await compare(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    delete user.password;
    return user;
  }

  async findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async sendNewsLetter(newsUserDto: NewsUserDto) {
    return await this.mailerService
      .sendMail({
        to: newsUserDto.email,
        subject: 'Подтверждение согласия на новостную рассылку',
        template: 'index',
        context: {
          email: newsUserDto.email,
        },
      })
      .catch((e) => {
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      });
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.userRepository.save(updateUserDto);
  }
}
