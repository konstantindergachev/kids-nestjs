import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { IUserResponse } from './interfaces/user-response.interface';
import { EMAIL_TAKEN_ERROR } from './user.constants';
import { UserEntity } from './user.entity';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  buildUserResponse(user: UserEntity): IUserResponse {
    return {
      user: {
        id: user.id,
        firstname: user.firstname,
        email: user.email,
        token: this.generateJWT(user),
      },
    };
  }
  generateJWT(user: UserEntity): string {
    return sign(
      { id: user.id, firstname: user.firstname, email: user.email },
      JWT_SECRET,
    );
  }

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

    return await this.userRepository.save(newUser);
  }
}
