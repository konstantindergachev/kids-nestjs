import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  @IsNotEmpty()
  readonly magic_title: string;

  @IsEmail()
  @IsNotEmpty()
  readonly magic_email: string;

  @IsString()
  @IsNotEmpty()
  readonly magic_number: number;

  @IsNotEmpty()
  readonly magic_text: string;
}
