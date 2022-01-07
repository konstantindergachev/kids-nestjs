import { AuthGuard } from '@app/user/guards/auth.guard';
import {
  Body,
  Controller,
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
} from './profile.constants';
import { CreateProfileDto } from './dto/create-profile.dto';
import { User } from '@app/user/decorators/user.decorator';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    await this.profileService.uploadImage(file);
    return { success: true, message: FILE_UPLOAD_SUCCESS };
  }

  @UseGuards(AuthGuard)
  @Post('/')
  async createProfile(
    @Body() createProfileDto: CreateProfileDto,
    @User('id') currentUserId: number,
  ) {
    await this.profileService.createProfile(createProfileDto, currentUserId);
    return { success: true, message: PROFILE_CREATED_SUCCESS };
  }
}
