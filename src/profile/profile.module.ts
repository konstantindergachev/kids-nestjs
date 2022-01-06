import { CloudinaryModule } from '@app/cloudinary/cloudinary.module';
import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
