import { CloudinaryModule } from '@app/cloudinary/cloudinary.module';
import { UserModule } from '@app/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileEntity } from './profile.entity';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    CloudinaryModule,
    UserModule,
    TypeOrmModule.forFeature([ProfileEntity]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
