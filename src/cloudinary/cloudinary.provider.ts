import getCloudinaryConfig from '@app/configs/cloudinaryconfig';
import { CLOUDINARY } from './cloudinary.constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: getCloudinaryConfig,
};
