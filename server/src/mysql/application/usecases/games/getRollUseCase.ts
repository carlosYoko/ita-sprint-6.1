import { GamesRepository } from 'mysql/domain/interfaces/gamesRepository';

export const getRollUseCase = async (
  gamesRepository: GamesRepository,
  playerId: number
) => {
  return await gamesRepository.getRollsById(playerId);
};
