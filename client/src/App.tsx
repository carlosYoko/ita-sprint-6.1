import { useState } from 'react';
import CreateUserPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import './App.css';

type UserDataType = {
  id: number;
  name: string;
};

function App() {
  const [userCreated, setUserCreated] = useState<boolean>(false);
  const [userData, setUserData] = useState<Partial<UserDataType>>({});

  const handleUserCreation = () => {
    setUserCreated(!userCreated);
  };

  return (
    <>
      <div>
        <h1>🎲 Juego de dados</h1>
        {userCreated ? (
          <GamePage userData={userData} returnMainPage={handleUserCreation} />
        ) : (
          <CreateUserPage
            handleUserData={setUserData}
            onUserCreation={handleUserCreation}
          />
        )}
      </div>
    </>
  );
}

export default App;
