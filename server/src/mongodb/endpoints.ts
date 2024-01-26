import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserModel, RollsModel } from "./schema";

export const app = express();

app.use(cors());
app.use(express.json());

// Mongo connection
mongoose.connect('mongodb://127.0.0.1:27017/dice_games');


/* 
  * Endpoints players
*/

//Enpoint for player creation
app.post('/players', async (req, res) => {
  try {
    const { name } = req.body;

    //Anon validation and trimming
    let trimmedName = name.trim()

    if (trimmedName === "") trimmedName = "Anon"

    const existingPlayer = await UserModel.findOne({ name: trimmedName });

    //Verify if the name is already taken
    if (!existingPlayer || existingPlayer.name === "Anon") {
      const newUser = new UserModel({
        name: trimmedName,
        userId: (await UserModel.countDocuments()) + 1
      })
      
      newUser.save();

      res.status(200).send(newUser);
      return;
    }

    res.status(400).send({ message: 'There is already a player with this name' });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

//Set new player name
app.put('/players/:id', async (req, res) => {
  try {
    const playerId = Number(req.params.id);
    const { name } = req.body;

    //Anon validation and trimming
    let trimmedName = name.trim();
    if (trimmedName === "") trimmedName = "Anon"

    //Verify if the user exists
    const existingPlayer = await UserModel.findOne({ userId: playerId });

    if (!existingPlayer) {
      return res.status(404).send({ error: 'Player not found' });
    }

    //Now verify if there's already an existing username with that name
    const existingName = await UserModel.findOne({ name: trimmedName });

    if (!existingName || existingName.name === "Anon") {
      const updatedPlayer = await UserModel.findOneAndUpdate({name: trimmedName});
      res.send(`The name has been updated to: "${trimmedName}"`);

      return
    }

    res.status(400).send({ error: 'The username is already taken!' });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

//Endpoint to return the ranking of players with victory rate

app.get('/players', async (_req, res) => {
  try {
    const rolls = await RollsModel.find();

    res.send({rolls})
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});