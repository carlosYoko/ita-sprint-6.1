import { app } from "./endpoints";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
