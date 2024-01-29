export type UserDataType = {
  id: number;
  name: string;
};

export type TypeRolls = {
  id: number;
  dice1: number;
  dice2: number;
  isWinner: boolean;
};

export type GamesTypes = {
  id: number;
  createdAt: Date;
  dice1: number;
  dice2: number;
  isWinner: boolean;
  playerId: number;
};
