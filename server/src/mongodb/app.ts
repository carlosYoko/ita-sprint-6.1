import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/odm');

// Definicion del modelo a partir de un schema sencillo
const todoSchema = new mongoose.Schema({
  text: { type: String },
  completed: { type: Boolean },
});

const Todo = mongoose.model('todo', todoSchema);

// Rutas
app.get('/', (_req: Request, res: Response) => {
  res.send('API con Mongoose y TypeScript');
});

app.get('/todos', async (_req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener todos' });
  }
});

app.post('/todos', async (req: Request, res: Response) => {
  try {
    const taskData = req.body;
    const task = await Todo.create(taskData);
    res.json(task);
  } catch (error) {
    res.status(400).send('Error al agregar la tarea');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
