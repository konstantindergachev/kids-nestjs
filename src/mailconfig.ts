import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

const mailconfig = () => {
  const {
    MAIL_HOST,
    MAIL_PORT,
    MAIL_FROM_NAME,
    MAIL_FROM_EMAIL,
    MAIL_FROM_PASSWORD,
  } = process.env;

  return {
    transport: {
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: MAIL_FROM_EMAIL,
        pass: MAIL_FROM_PASSWORD,
      },
    },
    defaults: {
      from: `"${MAIL_FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
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

export default mailconfig;
