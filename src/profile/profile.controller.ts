import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_UPLOAD_SUCCESS } from './profile.constants';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    await this.profileService.uploadImage(file);
    return { success: true, message: FILE_UPLOAD_SUCCESS };
  }
}
