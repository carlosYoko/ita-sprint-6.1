import { app } from "./endpoints";
import mongoConnection from "./mongodbConnection";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});


const connection = async () => {
  await mongoConnection("mongodb://127.0.0.1:27017/dice_games");
};

try {
  connection();
} catch (err) {
  console.log(err);
}

process.on("uncaughtException", () => {
  process.exit(1);
});
