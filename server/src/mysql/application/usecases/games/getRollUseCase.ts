import { GamesRepository } from '../../../domain/interfaces/gamesRepository';

export const getRollUseCase = async (
  gamesRepository: GamesRepository,
  playerId: number
) => {
  return await gamesRepository.getRollsById(playerId);
};
