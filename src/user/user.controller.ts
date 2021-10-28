import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { IUserResponse } from './interfaces/user-response.interface';
import { UserService } from './user.service';
import { MAX_AGE, TOKEN_NAME } from './user.constants';
import { IExpressRequest } from '@app/interfaces/express-request.interface';
import { generateJWT, setTokenCookie } from './utils';
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

    const cookie = this.preUserResponse(user);
    res.setHeader('Set-Cookie', cookie);
    return { user };
  }

  @Post('/login')
  @HttpCode(200)
  async loginUser(
    @Req() { res }: IExpressRequest,
    @Body() loginUserDto: LoginUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);

    const cookie = this.preUserResponse(user);
    res.setHeader('Set-Cookie', cookie);
    return { user };
  }

  private preUserResponse(user: UserEntity): string {
    const token = generateJWT(user);
    return setTokenCookie(TOKEN_NAME, token, MAX_AGE);
  }
}
