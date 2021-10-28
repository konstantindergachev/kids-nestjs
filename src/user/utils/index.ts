import { JWT_SECRET } from '@app/config';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { UserEntity } from '../user.entity';

export function generateJWT(user: UserEntity): string {
  return sign(
    { id: user.id, firstname: user.firstname, email: user.email },
    JWT_SECRET,
  );
}

export function setTokenCookie(
  tokenName: string,
  token: string,
  maxAge: number,
): string {
  const cookie = serialize(tokenName, token, {
    maxAge,
    expires: new Date(Date.now() + maxAge * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  });
  return cookie;
}
