import { JWT_SECRET } from '@app/configs/jwttokenconfig';
import { sign } from 'jsonwebtoken';
import { UserEntity } from '../user.entity';

export function generateJWT(user: UserEntity): string {
  return sign(
    { id: user.id, firstname: user.firstname, email: user.email },
    JWT_SECRET,
  );
}
