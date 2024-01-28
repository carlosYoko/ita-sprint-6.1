import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GameHistory from '../components/GameHistory';

type UserDataType = {
  id: number;
  name: string;
};

type TypeRolls = {
  id: number;
  dice1: number;
  dice2: number;
  isWinner: boolean;
};

type GamesTypes = {
  id: number;
  createdAt: Date;
  dice1: number;
  dice2: number;
  isWinner: boolean;
  playerId: number;
};

interface GamePageProps {
  userData: Partial<UserDataType>;
  returnMainPage: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ userData, returnMainPage }) => {
  const [isEditedName, setIsEditedName] = useState(false);
  const [username, setUsername] = useState(userData.name);
  const [resultRolls, setResultRolls] = useState<TypeRolls>();
  const [isExistUserMessage, setIsExistUserMessage] = useState('');
  const [gameHistory, setGameHistory] = useState<GamesTypes[]>([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  let usernameContent;

  const fetchGameHistory = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/games/${userData.id}`
      );
      console.log(response.data);
      setGameHistory(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      }
    }
  }, [setGameHistory, userData.id]);

  useEffect(() => {
    const fetchData = async () => {
      if (isHistoryVisible) {
        await fetchGameHistory();
      }
    };

    fetchData();
  }, [isHistoryVisible, fetchGameHistory, resultRolls]);

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Obtener el token del localStorage
      const userToken = localStorage.getItem('userToken');

      const response = await axios.put(
        `http://localhost:3000/players/${userData.id}`,
        {
          name: username,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`, // Incluye el token en la cabecera
          },
        }
      );

      console.log(response.data.name);
      setUsername(response.data.name);
      setIsEditedName(!isEditedName);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setIsExistUserMessage(error.response?.data.error);
      }
    }
  };

  const handleRollsDice = async () => {
    try {
      // Obtener el token del localStorage
      const userToken = localStorage.getItem('userToken');

      const response = await axios.post(
        `http://localhost:3000/games/${userData.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log(response.data);

      setResultRolls(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };
  const handleDeletePlayerRolls = async () => {
    try {
      await axios.delete(`http://localhost:3000/games/${userData.id}`);
      // Despues de eliminar, actualiza el historial de juegos
      fetchGameHistory();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  if (isEditedName) {
    usernameContent = (
      <>
        <input
          type="text"
          value={username}
          onFocus={() => setIsExistUserMessage('')}
          onChange={(e) => {
            handleChangeUsername(e);
          }}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Aceptar</button>
        <button
          onClick={() => {
            setIsExistUserMessage('');
            setUsername(userData.name);
            setIsEditedName(!isEditedName);
          }}
        >
          Cancelar
        </button>
      </>
    );
  } else {
    usernameContent = (
      <>
        <button onClick={handleRollsDice}>Tirar dados</button>
        <br />
        <br />
        <button onClick={() => setIsEditedName(!isEditedName)}>
          Cambiar nombre
        </button>
      </>
    );
  }

  return (
    <>
      <p>Jugador:</p>
      <h3>{username}</h3>
      {isExistUserMessage}
      {resultRolls && (
        <>
          <p>Resultado de la tirada:</p>
          <p>Dado 1: {resultRolls.dice1}</p>
          <p>Dado 2: {resultRolls.dice2}</p>
          <p>
            {resultRolls.isWinner
              ? 'Partida ganada!!!'
              : 'Partida perdida... Sigue probando!'}
          </p>
        </>
      )}
      <br />
      {usernameContent}

      <button
        onClick={() => {
          setIsHistoryVisible(!isHistoryVisible);
          fetchGameHistory();
        }}
      >
        {isHistoryVisible ? 'Ocultar historial' : 'Historial de jugadas'}
      </button>
      <button
        onClick={() => {
          handleDeletePlayerRolls();
          setIsHistoryVisible(!isHistoryVisible);
        }}
      >
        Eliminar Historial
      </button>

      <br />
      {isHistoryVisible ? <GameHistory games={gameHistory} /> : ' '}
      <br />
      <button onClick={() => returnMainPage()}>Salir del juego</button>
    </>
  );
};

export default GamePage;
