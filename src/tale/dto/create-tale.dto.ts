import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly properties: object[];
}
