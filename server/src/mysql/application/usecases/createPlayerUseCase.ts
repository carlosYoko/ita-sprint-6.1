// nuevo
import { PlayerRepository } from 'mysql/domain/interfaces/playerRepository';
import { IPlayer } from 'mysql/domain/entities/player';

export const CreatePlayerUseCase = (playerRepository: PlayerRepository) => ({
  execute: async (name: string): Promise<IPlayer> => {
    const existingPlayer = await playerRepository.findPlayerByName(name);

    if (!existingPlayer) {
      return await playerRepository.createPlayer({ name });
    } else {
      throw new Error('Ya existe un jugador con este nombre!');
    }
  },
});
