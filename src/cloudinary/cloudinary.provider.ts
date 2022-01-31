import getCloudinaryConfig from '@app/cloudinaryconfig';
import { CLOUDINARY } from './cloudinary.constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: getCloudinaryConfig,
};
