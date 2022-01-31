import { ConfigService } from '@nestjs/config';
import { IExpressRequest } from '@app/interfaces/express-request.interface';
import { UserService } from '@app/user/user.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: IExpressRequest, _, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      return next();
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const configService = new ConfigService();
      const decoded = verify(token, configService.get<string>('JWT_SECRET'));
      if (typeof decoded !== 'string') {
        const user = await this.userService.findById(decoded.id);
        req.user = user;
        return next();
      }
    } catch (error) {
      req.user = null;
      return next();
    }
  }
}
