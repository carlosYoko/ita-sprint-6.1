import { PlayerRepository } from '../../../domain/interfaces/playerRepository';

export const sayWellcomeUseCase = (playerRepository: PlayerRepository) => {
  return playerRepository.wellcome();
};
