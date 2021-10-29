import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { IUserResponse } from './interfaces/user-response.interface';
import { UserService } from './user.service';
import { IExpressRequest } from '@app/interfaces/express-request.interface';
import { generateJWT } from './utils';
import { UserEntity } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  async createUser(
    @Req() { res }: IExpressRequest,
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.createUser(createUserDto);
    const token = this.preUserResponse(user);
    return { user: { ...user, token } };
  }

  @Post('/login')
  @HttpCode(200)
  async loginUser(
    @Req() { res }: IExpressRequest,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const user = await this.userService.loginUser(loginUserDto);
    const token = this.preUserResponse(user);
    return { user: { ...user, token } };
  }

  private preUserResponse(user: UserEntity): string {
    const token = generateJWT(user);
    return token;
  }
}
