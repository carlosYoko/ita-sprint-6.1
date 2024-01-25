import React from 'react';

type GamesTypes = {
  id: number;
  createdAt: Date;
  dice1: number;
  dice2: number;
  isWinner: boolean;
  playerId: number;
};

interface GameHistoryProps {
  games: GamesTypes[];
}

const GameHistory: React.FC<GameHistoryProps> = ({ games }) => {
  return (
    <div>
      <h3>Historial de Jugadas</h3>
      <table>
        <thead>
          <tr>
            <th>Dado 1</th>
            <th>Dado 2</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.dice1}</td>
              <td>{game.dice2}</td>
              <td>{game.isWinner ? 'Ganada' : 'Perdida'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameHistory;
