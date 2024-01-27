import { PlayerRepository } from 'mysql/domain/interfaces/playerRepository';

export const renamePlayerUseCase = async (
  playerRepository: PlayerRepository,
  name: string,
  playerId: number
) => {
  const existingPlayerID = await playerRepository.findPlayerByID(playerId);

  if (!existingPlayerID) {
    throw new Error('Jugador no encontrado');
  }
  const existingPlayerName = await playerRepository.findPlayerByName(name);

  if (existingPlayerName) {
    throw new Error('Ya existe un jugador con este nombre!');
  }

  return await playerRepository.createPlayer(name);
};
