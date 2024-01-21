import { useState } from 'react';
import axios from 'axios';

type UserDataType = {
  id: number;
  name: string;
};

interface GamePageProps {
  userData: Partial<UserDataType>;
  returnMainPage: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ userData, returnMainPage }) => {
  const [isEditedName, setIsEditedName] = useState(false);
  const [username, setUsername] = useState(userData.name);
  const [isExistUserMessage, setIsExistUserMessage] = useState('');
  let usernameContent;

  // Fetch de cambio de nombre usuario
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/players/${userData.id}`,
        {
          name: username,
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
        <button>Tirar dados</button>
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
      <br />
      <br />
      {usernameContent}
      <br />
      <br />
      <button onClick={() => returnMainPage()}>Salir del juego</button>
    </>
  );
};

export default GamePage;
