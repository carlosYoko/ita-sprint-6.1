type PlayerType = {
  id: number;
  name: string;
  successPercentage: number | string;
};

type PlayerTableProps = {
  players: PlayerType[];
};

const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre jugador</th>
            <th>Porcentaje de exito</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.successPercentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
