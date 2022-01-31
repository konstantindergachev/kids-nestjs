import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ConfigService } from '@nestjs/config';

const getMailConfig = async (configService: ConfigService) => {
  return {
    transport: {
      host: configService.get<string>('MAIL_HOST'),
      port: configService.get<number>('MAIL_PORT'),
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: configService.get<string>('MAIL_FROM_EMAIL'),
        pass: configService.get<string>('MAIL_FROM_PASSWORD'),
      },
    },
    defaults: {
      from: `"${configService.get<string>(
        'MAIL_FROM_NAME',
      )}" <${configService.get<string>('MAIL_FROM_EMAIL')}>`,
    },
    template: {
      dir: process.cwd() + '/src/templates/',
      adapter: new PugAdapter(),
      options: {
        strict: true,
      },
    },
  };
};

export default getMailConfig;
