import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ProfileEntity } from '@app/profile/profile.entity';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly profile: ProfileEntity;
}
