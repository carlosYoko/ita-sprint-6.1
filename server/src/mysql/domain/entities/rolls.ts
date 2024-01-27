export interface IRoll {
  id: number;
  dice1: number;
  dice2: number;
  isWinner: boolean;
}

export interface IPlayerWithRolls {
  id: number;
  name: string;
  rolls: IRoll[];
}
