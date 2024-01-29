import { GamesRepository } from '../../../domain/interfaces/gamesRepository';

export const rollDiceUseCase = async (
  gameRepository: GamesRepository,
  playerId: number
) => {
  // Realizar la tirada de dos dados
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const total = dice1 + dice2;
  const win = total === 7;

  // Guardar la tirada en la base de datos
  return await gameRepository.rollDice(dice1, dice2, win, playerId);
};
