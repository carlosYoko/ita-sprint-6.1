import { PlayerRepository } from '../../../domain/interfaces/playerRepository';

export const renamePlayerUseCase = async (
  playerRepository: PlayerRepository,
  name: string,
  playerId: number
) => {
  const existingPlayer = await playerRepository.existingPlayer(playerId);

  if (!existingPlayer) {
    throw new Error('Jugador no encontrado');
  }
  const existingName = await playerRepository.existingName(name, playerId);
  if (existingName) {
    throw new Error('Ya existe un jugador con este nombre!');
  }

  return await playerRepository.updatePlayerName(name, playerId);
};
