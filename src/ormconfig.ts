import { ConnectionOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const getConfig = async (
  configService: ConfigService,
): Promise<ConnectionOptions> => {
  return {
    type: 'postgres',
    url: configService.get<string>('POSTGRES_URL'),
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    synchronize: false,
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    cli: {
      migrationsDir: 'src/migrations',
    },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  };
};

export default getConfig;

// import { ConnectionOptions } from 'typeorm';

// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: process.env.POSTGRES_HOST,
//   port: Number(process.env.POSTGRES_PORT),
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DATABASE,
//   entities: [`${__dirname}/**/*.entity{.ts,.js}`],
//   synchronize: false,
//   migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
//   cli: {
//     migrationsDir: 'src/migrations',
//   },
// };

// export default config;
