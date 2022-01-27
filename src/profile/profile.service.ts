import { IMAGE_UPLOAD_ERROR } from '@app/cloudinary/cloudinary.constants';
import { CloudinaryService } from '@app/cloudinary/cloudinary.service';
import { UserService } from '@app/user/user.service';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PHONE_TAKEN_ERROR } from './profile.constants';
import { ProfileEntity } from './profile.entity';

@Injectable()
export class ProfileService {
  private url: string;
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
    private readonly userService: UserService,
  ) {}

  async uploadImage(file: Express.Multer.File) {
    try {
      const uploadedData = await this.cloudinaryService.uploadImage(file);
      this.url = uploadedData?.url;
      return file;
    } catch (error) {
      throw new BadRequestException(IMAGE_UPLOAD_ERROR);
    }
  }

  async createProfile(
    createProfileDto: CreateProfileDto,
    currentUserId: number,
  ): Promise<ProfileEntity> {
    const errorsResponse = { errors: {} };

    const profileByPhone = await this.profileRepository.findOne({
      phone: createProfileDto.phone,
    });

    if (profileByPhone) {
      errorsResponse.errors['phone'] = PHONE_TAKEN_ERROR;
      throw new HttpException(errorsResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const newProfile = new ProfileEntity();
    Object.assign(newProfile, { ...createProfileDto, photo: this.url });
    this.url = '';
    const profile = await this.profileRepository.save(newProfile);

    const user = await this.userService.findById(currentUserId);
    user.profile = profile;

    await this.userService.updateUser(currentUserId, user);

    return profile;
  }

  async updateProfile(
    updateProfileDto: UpdateProfileDto,
    currentUserId: number,
  ): Promise<ProfileEntity> {
    const oldProfile = await this.profileRepository.findOne({
      id: updateProfileDto.id,
    });

    const newProfile = {
      gender: updateProfileDto.gender,
      photo: this.url || oldProfile.photo,
      phone: updateProfileDto.phone || oldProfile.phone,
      address: updateProfileDto.address || oldProfile.address,
    };

    await this.profileRepository.update({ id: oldProfile.id }, newProfile);

    const oldUser = await this.userService.findById(currentUserId);
    const newUser = {
      firstname: updateProfileDto.firstname,
      lastname: updateProfileDto.lastname,
      email: updateProfileDto.email,
      password: oldUser.password,
      profile: oldUser.profile,
    };
    await this.userService.updateUser(currentUserId, newUser);

    return oldUser.profile;
  }
}
