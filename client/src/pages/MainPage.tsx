import { useState } from 'react';
import axios from 'axios';
import PlayerTable from '../components/PlayersTable';

type UserDataInterface = {
  id: number;
  name: string;
};

interface CreateUserPageProps {
  onUserCreation: () => void;
  handleUserData: (userData: UserDataInterface) => void;
}

const CreateUserPage: React.FC<CreateUserPageProps> = ({
  onUserCreation,
  handleUserData,
}) => {
  const [username, setUsername] = useState('');
  const [isExistUserMessage, setIsExistUserMessage] = useState('');
  const [players, setPlayers] = useState([]);
  const [isViewRanking, setIsViewRanking] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Fetch de registro para nuevo usuario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/players', {
        name: username,
      });
      handleUserData({
        id: response.data.id,
        name: response.data.name,
      });

      onUserCreation();
      console.log('Respuesta de la API:', response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setIsExistUserMessage(error.response?.data.message);
        console.log(error.response?.data.message);
      } else {
        // Manejar otros tipos de errores
        console.error('Error en la llamada a la API:', error);
      }
    }
  };

  // Fetch de ranking general
  const handleRanking = async () => {
    try {
      const response = await axios.get('http://localhost:3000/players');
      setPlayers(response.data);

      setIsViewRanking(!isViewRanking);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message);
      }
    }
  };

  return (
    <div>
      <h2>Crear nuevo usuario</h2>
      <p>{isExistUserMessage}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <br />
        <button type="submit">Crear usuario y jugar</button>
        <br />
        <br />
      </form>
      <button onClick={handleRanking}>
        {isViewRanking ? 'Ocultar ranking' : 'Ranking general'}
      </button>
      <br />
      <br />
      {isViewRanking ? <PlayerTable players={players} /> : ' '}
    </div>
  );
};

export default CreateUserPage;
