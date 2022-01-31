import { v2 } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

const getCloudinaryConfig = () => {
  const configService = new ConfigService();
  return v2.config({
    cloud_name: configService.get<string>('CLOUDINARY_CLOUD_NAME'),
    api_key: configService.get<string>('CLOUDINARY_API_KEY'),
    api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
  });
};

export default getCloudinaryConfig;
