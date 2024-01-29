import { RankingRepository } from '../../../domain/interfaces/rankingRepository';
import { IPlayerWithRolls } from '../../../domain/entities/rolls';

export const getAllRankingsUseCase = async (
  rankingRepository: RankingRepository
) => {
  const allPlayersAndPlays = await rankingRepository.getAllPlayersAndRolls();

  // Calcular el porcentaje de exito medio del conjunto de todos los jugadores
  const totalRollsAllPlayers = allPlayersAndPlays.reduce(
    (acc, cur) => acc + cur.rolls.length,
    0
  );

  const totalWins = allPlayersAndPlays
    .map(
      (player) => player.rolls.filter((roll) => roll.isWinner === true).length
    )
    .reduce((acc, cur) => acc + cur, 0);

  const averageSuccessRate = (totalWins / totalRollsAllPlayers) * 100;

  // Función para obtener el porcentaje de exito de un jugador
  const getSuccessRate = (player: IPlayerWithRolls) => {
    const totalRolls = player.rolls.length;
    if (totalRolls === 0) return 0;
    const wins = player.rolls.filter((roll) => roll.isWinner === true).length;
    return (wins / totalRolls) * 100;
  };

  // Ordenar la lista de jugadores por porcentaje de exito
  const sortedPlayersBySuccess = allPlayersAndPlays.sort(
    (a, b) => getSuccessRate(b) - getSuccessRate(a)
  );

  // Crear el ranking con la informacion necesaria
  const ranking = sortedPlayersBySuccess.map((player) => ({
    id: player.id,
    name: player.name,
    successRate: getSuccessRate(player),
  }));

  return { ranking, averageSuccessRate };
};
