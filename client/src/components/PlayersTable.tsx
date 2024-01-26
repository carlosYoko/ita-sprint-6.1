import { useEffect, useState } from 'react';
import axios from 'axios';

type PlayerType = {
  id: number;
  name: string;
  successPercentage: number | string;
  successRate: number;
};
const PlayerTable = () => {
  const [playerList, setPlayerList] = useState<PlayerType[] | null>(null);
  const [generalRanking, setGeneralRanking] = useState<PlayerType[]>([]);
  const [bestPlayer, setBestPlayer] = useState<PlayerType | undefined>(
    undefined
  );
  const [worstPlayer, setWorstPlayer] = useState<PlayerType | undefined>(
    undefined
  );
  const [activeComponent, setActiveComponent] = useState('listUsers');
  let contentComponentActive;

  useEffect(() => {
    handleGetAllPlayers();
  }, []);

  const handleGetAllPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/players');
      setPlayerList(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };

  const handleGetRanking = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ranking');
      setGeneralRanking(response.data.ranking);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };

  const handleGetBestPlayer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ranking/winner');
      setBestPlayer(response.data.winner);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };

  const handleGetWorstPlayer = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ranking/loser');
      setWorstPlayer(response.data.loser);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  switch (activeComponent) {
    case 'listUsers':
      contentComponentActive = (
        <>
          {playerList &&
            playerList.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>
                  {typeof player.successPercentage === 'number'
                    ? `${Number(player.successPercentage).toFixed(2)}%`
                    : 'Sin partidas ganadas'}
                </td>
              </tr>
            ))}
        </>
      );
      break;
    case 'generalRanking':
      contentComponentActive = (
        <>
          {generalRanking &&
            generalRanking.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{`${Number(player.successRate).toFixed(2)}%`}</td>
              </tr>
            ))}
        </>
      );
      break;
    case 'bestPlayerRanking':
      contentComponentActive = (
        <>
          {bestPlayer && (
            <tr key={bestPlayer.id}>
              <td>{bestPlayer.id}</td>
              <td>{bestPlayer.name}</td>
              <td>{`${Number(bestPlayer.successRate).toFixed(2)}%`}</td>
            </tr>
          )}
        </>
      );
      break;
    case 'worsePlayerRankin':
      contentComponentActive = (
        <>
          {worstPlayer && (
            <tr key={worstPlayer.id}>
              <td>{worstPlayer.id}</td>
              <td>{worstPlayer.name}</td>
              <td>{`${Number(worstPlayer.successRate).toFixed(2)}%`}</td>
            </tr>
          )}
        </>
      );
      break;
  }

  return (
    <>
      <button
        onClick={() => {
          handleButtonClick('listUsers');
          handleGetAllPlayers();
        }}
      >
        Lista jugadores
      </button>
      <button
        onClick={() => {
          handleButtonClick('generalRanking');
          handleGetRanking();
        }}
      >
        Ranking General
      </button>
      <button
        onClick={() => {
          handleButtonClick('bestPlayerRanking');
          handleGetBestPlayer();
        }}
      >
        Mejor jugador
      </button>
      <button
        onClick={() => {
          handleButtonClick('worsePlayerRankin');
          handleGetWorstPlayer();
        }}
      >
        Peor jugador
      </button>
      <br />
      <br />
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre jugador</th>
              <th>Porcentaje de éxito</th>
            </tr>
          </thead>
          <tbody>{contentComponentActive}</tbody>
        </table>
      </div>
    </>
  );
};

export default PlayerTable;
