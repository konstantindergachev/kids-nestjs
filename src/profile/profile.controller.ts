import { AuthGuard } from '@app/user/guards/auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  FILE_UPLOAD_SUCCESS,
  PROFILE_CREATED_SUCCESS,
  PROFILE_UPDATED_SUCCESS,
} from './profile.constants';
import { CreateProfileDto } from './dto/create-profile.dto';
import { User } from '@app/user/decorators/user.decorator';
import { UserService } from '@app/user/user.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {
  IProfileSuccessResponse,
  IUserResponse,
} from './interfaces/profile-response.interface';

@Controller('profiles')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly userService: UserService,
  ) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<IProfileSuccessResponse> {
    await this.profileService.uploadImage(file);
    return { success: true, message: FILE_UPLOAD_SUCCESS };
  }
  @UseGuards(AuthGuard)
  @Get('/')
  async getProfile(@User('id') currentUserId: number): Promise<IUserResponse> {
    const user = await this.userService.findById(currentUserId);
    return { user };
  }

  @UseGuards(AuthGuard)
  @Post('/')
  async createProfile(
    @Body() createProfileDto: CreateProfileDto,
    @User('id') currentUserId: number,
  ): Promise<IProfileSuccessResponse> {
    await this.profileService.createProfile(createProfileDto, currentUserId);
    return { success: true, message: PROFILE_CREATED_SUCCESS };
  }

  @UseGuards(AuthGuard)
  @Post('/edit')
  async updateProfile(
    @Body() updateProfileDto: UpdateProfileDto,
    @User('id') currentUserId: number,
  ): Promise<IProfileSuccessResponse> {
    await this.profileService.updateProfile(updateProfileDto, currentUserId);
    return { success: true, message: PROFILE_UPDATED_SUCCESS };
  }
}
