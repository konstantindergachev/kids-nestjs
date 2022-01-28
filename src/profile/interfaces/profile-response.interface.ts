import { UserType } from '../../user/types/user.type';

export interface IProfileSuccessResponse {
  success: boolean;
  message: string;
}

export interface IUserResponse {
  user: UserType;
}
