import { RankingRepository } from '../../../domain/interfaces/rankingRepository';
import { IPlayerWithRolls } from '../../../domain/entities/rolls';

export const getWorstPlayerUseCase = async (
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

  // Jugador con peor porcentaje de exito
  const loserPlayer = allPlayersAndPlays.reduce((prev, cur) => {
    const prevSuccessRate = getSuccessRate(prev);
    const currentSuccessRate = getSuccessRate(cur);
    return prevSuccessRate < currentSuccessRate ? prev : cur;
  });

  return {
    loser: {
      id: loserPlayer.id,
      name: loserPlayer.name,
      successRate: getSuccessRate(loserPlayer),
    },
  };
};
