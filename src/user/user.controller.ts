import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { IUserRegisterResponse } from './interfaces/user-response.interface';
import { UserService } from './user.service';
import { generateJWT } from './utils';
import { UserEntity } from './user.entity';
import { REGISTRATION_SUCCESS } from './user.constants';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserRegisterResponse> {
    await this.userService.createUser(createUserDto);
    return { success: true, message: REGISTRATION_SUCCESS };
  }

  @Post('/login')
  @HttpCode(200)
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    const user = await this.userService.loginUser(loginUserDto);
    const token = this.preUserResponse(user);
    return { user: { ...user, token } };
  }

  private preUserResponse(user: UserEntity): string {
    const token = generateJWT(user);
    return token;
  }
}
