import { IPlayer } from './player';

export interface IRoll {
  id: number;
  createdAt: Date;
  dice1: number;
  dice2: number;
  isWinner: boolean;
  playerId: number;
}

export interface IPlayerWithRolls {
  player: IPlayer | null;
  rolls: IRoll[];
}
