import { ConnectionOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const getConfig = async (
  configService: ConfigService,
): Promise<ConnectionOptions> => ({
  type: 'postgres',
  url: configService.get<string>('POSTGRES_URL_URL'),
  host: configService.get<string>('POSTGRES_URL_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  username: configService.get<string>('POSTGRES_URL_USER'),
  password: configService.get<string>('POSTGRES_URL_PASSWORD'),
  database: configService.get<string>('POSTGRES_URL_DATABASE'),
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  cli: {
    migrationsDir: 'src/migrations',
  },
  ssl: {
    rejectUnauthorized: false,
  },
});

export default getConfig;
