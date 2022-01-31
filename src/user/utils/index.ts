import { ConfigService } from '@nestjs/config';
import { sign } from 'jsonwebtoken';
import { UserEntity } from '../user.entity';

export function generateJWT(user: UserEntity): string {
  const configService = new ConfigService();
  return sign(
    { id: user.id, firstname: user.firstname, email: user.email },
    configService.get<string>('JWT_SECRET'),
  );
}
