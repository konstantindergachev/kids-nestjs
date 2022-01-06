import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  FILE_UPLOAD_SUCCESS,
  PROFILE_CREATED_SUCCESS,
} from './profile.constants';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    await this.profileService.uploadImage(file);
    return { success: true, message: FILE_UPLOAD_SUCCESS };
  }

  @Post('/')
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    await this.profileService.createProfile(createProfileDto);
    return { success: true, message: PROFILE_CREATED_SUCCESS };
  }
}
