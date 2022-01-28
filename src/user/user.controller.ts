import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  IUserSuccessResponse,
  IUserResponse,
} from './interfaces/user-response.interface';
import { UserService } from './user.service';
import { generateJWT } from './utils';
import { UserEntity } from './user.entity';
import { REGISTRATION_SUCCESS, SEND_NEWS_MESSAGE } from './user.constants';
import { NewsUserDto } from './dto/news-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserSuccessResponse> {
    await this.userService.createUser(createUserDto);
    return { success: true, message: REGISTRATION_SUCCESS };
  }

  @Post('/login')
  @HttpCode(200)
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);
    const token = this.preUserResponse(user);
    return { user: { ...user, token } };
  }
  @Post('/news')
  @HttpCode(200)
  async sendNews(
    @Body() newsUserDto: NewsUserDto,
  ): Promise<IUserSuccessResponse> {
    await this.userService.sendNewsLetter(newsUserDto);
    return { success: true, message: SEND_NEWS_MESSAGE };
  }

  private preUserResponse(user: UserEntity): string {
    const token = generateJWT(user);
    return token;
  }
}
