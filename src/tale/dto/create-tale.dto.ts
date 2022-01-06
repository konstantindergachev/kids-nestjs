import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly artist: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly properties: object[];
}
