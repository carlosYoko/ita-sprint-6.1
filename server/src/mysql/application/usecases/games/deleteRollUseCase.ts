import { GamesRepository } from 'mysql/domain/interfaces/gamesRepository';

export const deleteRollUseCase = async (
  gameRepository: GamesRepository,
  playerId: number
) => {
  const existingPlayer = await gameRepository.getPlayerById(playerId);
  console.log(existingPlayer);
  if (!existingPlayer) {
    throw new Error('No existe el jugador');
  }
  await gameRepository.deleteRollsById(playerId);
};
