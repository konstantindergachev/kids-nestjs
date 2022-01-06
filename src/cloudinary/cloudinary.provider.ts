import cloudinaryconfig from '@app/cloudinaryconfig';
import { CLOUDINARY } from './cloudinary.constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => cloudinaryconfig(),
};
