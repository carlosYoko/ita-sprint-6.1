import { IRoll } from './rolls';

export interface IPlayer {
  id: number;
  name: string;
  createdAt: Date;
  rolls: IRoll[];
}
