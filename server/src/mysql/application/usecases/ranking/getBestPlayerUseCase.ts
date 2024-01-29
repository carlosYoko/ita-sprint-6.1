import { RankingRepository } from '../../../domain/interfaces/rankingRepository';
import { IPlayerWithRolls } from '../../../domain/entities/rolls';

export const getBestPlayerUseCase = async (
  rankingRepository: RankingRepository
) => {
  const allPlayersAndPlays = await rankingRepository.getAllPlayers();

  // Funcion para obtener el porcentaje de exito de un jugador
  const getSuccessRate = (player: IPlayerWithRolls) => {
    const totalRolls = player.rolls.length;
    if (totalRolls === 0) return 0;
    const wins = player.rolls.filter((roll) => roll.isWinner === true).length;
    return (wins / totalRolls) * 100;
  };

  // Jugador con mejor porcentaje de exito
  const winnerPlayer = allPlayersAndPlays.reduce((prev, cur) => {
    const prevSuccessRate = getSuccessRate(prev);
    const currentSuccessRate = getSuccessRate(cur);
    return prevSuccessRate > currentSuccessRate ? prev : cur;
  });

  return {
    winner: {
      id: winnerPlayer.id,
      name: winnerPlayer.name,
      successRate: getSuccessRate(winnerPlayer),
    },
  };
};
