import { PlayerRepository } from '../../../domain/interfaces/playerRepository';

export const createPlayerUseCase = async (
  playerRepository: PlayerRepository,
  name: string
) => {
  const existingPlayer = await playerRepository.findPlayerByName(name);

  if (!existingPlayer) {
    return await playerRepository.createPlayer(name);
  } else {
    throw new Error('Ya existe un jugador con este nombre!');
  }
};
