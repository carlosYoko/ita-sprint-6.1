import { PlayerRepository } from '../../../domain/interfaces/playerRepository';
import { IPlayerWithRolls } from '../../../domain/entities/rolls';

export const getAllPlayersUseCase = async (
  playerRepository: PlayerRepository
) => {
  const allPlayersAndRolls = await playerRepository.getAllPlayersAndRolls();
  if (!allPlayersAndRolls) {
    return null;
  }
  const playersWithSuccessPercentage = allPlayersAndRolls.map(
    (player: IPlayerWithRolls) => {
      const totalRolls = player.rolls.length;
      const successfulRolls = player.rolls.filter(
        (roll) => roll.isWinner === true
      ).length;

      const successPercentage = (successfulRolls / totalRolls) * 100;

      return {
        id: player.id,
        name: player.name,
        successPercentage: successPercentage || 'Sin partidas ganadas',
      };
    }
  );
  return playersWithSuccessPercentage;
};
