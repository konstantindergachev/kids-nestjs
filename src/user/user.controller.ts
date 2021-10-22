import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto): void {
    console.log('controller createUserDto', createUserDto); //FIXME:
    this.userService.createUser(createUserDto);
  }
}
