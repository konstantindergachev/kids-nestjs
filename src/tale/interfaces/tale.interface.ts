import { TaleEntity } from '../tale.entity';

export interface ITaleResponse {
  tale: TaleEntity;
  username: string;
}
