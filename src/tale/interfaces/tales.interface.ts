import { TaleEntity } from '../tale.entity';

export interface ITalesResponse {
  tales: TaleEntity[];
  username: string;
}
