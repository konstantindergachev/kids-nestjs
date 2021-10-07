import { IsNotEmpty, IsString } from 'class-validator';
import { ITaleProperties } from '../interfaces/tale.interface';

export class CreateTaleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly properties: ITaleProperties;
}
