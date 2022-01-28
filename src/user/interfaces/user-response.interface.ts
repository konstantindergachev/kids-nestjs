import { UserType } from '../types/user.type';

export interface IUserSuccessResponse {
  success: boolean;
  message: string;
}

export interface IUserResponse {
  user: UserType & { token: string }; // merges two types
}
