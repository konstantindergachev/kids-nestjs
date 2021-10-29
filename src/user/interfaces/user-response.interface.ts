import { UserType } from '../types/user.type';

export interface IUserResponse {
  user: UserType & { token: string }; // merges two types
}
