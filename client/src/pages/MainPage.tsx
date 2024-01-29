import { useState } from 'react';
import axios from 'axios';
import PlayerTable from '../components/PlayersTable';

type UserDataInterface = {
  id: number;
  name: string;
  token: string;
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

      // Guarda el token en el localStorage
      const userToken = response.data.token;
      localStorage.setItem('userToken', userToken);

      handleUserData({
        id: response.data.player.id,
        name: response.data.player.name,
        token: userToken,
      });

      onUserCreation();
      console.log('Respuesta de la API:', response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setIsExistUserMessage(error.response?.data.message);
        console.log(error.response?.data.message);
      } else {
        console.error('Error en la llamada a la API:', error);
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
      <button onClick={() => setIsViewRanking(!isViewRanking)}>
        {isViewRanking ? 'Ocultar lista' : 'Lista de jugadores'}
      </button>
      <br />
      <br />
      {isViewRanking ? <PlayerTable /> : ' '}
    </div>
  );
};

export default CreateUserPage;
