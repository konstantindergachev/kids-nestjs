import { IMAGE_UPLOAD_ERROR } from '@app/cloudinary/cloudinary.constants';
import { CloudinaryService } from '@app/cloudinary/cloudinary.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async uploadImage(file: Express.Multer.File) {
    try {
      return await this.cloudinaryService.uploadImage(file);
    } catch (error) {
      throw new BadRequestException(IMAGE_UPLOAD_ERROR);
    }
  }
}
