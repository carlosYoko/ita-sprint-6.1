import express from "express";
import cors from "cors";
import { UserModel, RollsModel } from "./schema";

export const app = express();

app.use(cors());
app.use(express.json());

/*
 * Endpoints players
*/

//Enpoint for player creation
app.post("/players", async (req, res) => {
  try {
    const { name } = req.body;

    //Anon validation and trimming
    let trimmedName = name.trim();

    if (trimmedName === "") trimmedName = "Anon";

    const existingPlayer = await UserModel.findOne({ name: trimmedName });

    //Verify if the name is already taken
    if (!existingPlayer || existingPlayer.name === "Anon") {
      const newUser = new UserModel({
        name: trimmedName,
        userId: (await UserModel.countDocuments()) + 1,
      });

      newUser.save();

      res.status(201).send({message: `The player ${newUser.name} has been created`});
      return;
    }

    res
      .status(400)
      .send({ message: "There is already a player with this name" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error", error: error });
  }
});

//Set new player name
app.put("/players/:id", async (req, res) => {
  try {
    const playerId = Number(req.params.id);
    const { name } = req.body;

    //Anon validation and trimming
    let trimmedName = name.trim();
    if (trimmedName === "") trimmedName = "Anon";

    //Verify if the user exists
    const existingPlayer = await UserModel.findOne({ userId: playerId });

    if (!existingPlayer) {
      return res.status(404).send({ error: "Player not found" });
    }

    //Now verify if there's already an existing username with that name
    const existingName = await UserModel.findOne({ name: trimmedName });

    if (!existingName || existingName.name === "Anon") {
      const updatedPlayer = await UserModel.findOneAndUpdate({
        name: trimmedName,
      });
      res.send({message: `The name has been updated to: "${trimmedName}"`});

      return;
    }

    res.status(400).send({ error: "The username is already taken!" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error", error: error });
  }
});

//Endpoint to return the ranking of players with victory rate
app.get("/players", async (_req, res) => {
  type RollType = {
    userId: number;
    name: string;
    rolls: Array<boolean>;
  };

  try {
    //First retrieve both Users and Rolls
    const allRolls = await RollsModel.find();
    const allUsers = await UserModel.find();

    //Iterate over the object to combine all the useful data in a single variable
    const combinedData = allRolls.map((roll) => {
      const user = allUsers.find((users) => users.userId === roll.userId);
      return {
        userId: roll.userId,
        name: user!.name,
        isWin: roll.isWin
      };
    }).reduce((acc: RollType[], roll) => {
      const existingUser = acc.find((user) => user.userId === roll.userId);

      if (existingUser) {
        existingUser.rolls.push(roll.isWin!);
      } else {
        acc.push({
          userId: roll.userId!,
          name: roll.name!,
          rolls: [roll.isWin!],
        });
      }
      return acc;
    }, []);

    //Get the rate of victories and its respective players 
    const playersWithWinRate = combinedData.map(users => {
      const totalRolls = users.rolls.length
      const totalWins = users.rolls.reduce((acc: Array<number>, value, index) => {
        if (value) {
          acc.push(index);
        }
        return acc;
      }, []).length;

      const successRate = (totalWins / totalRolls) * 100;

        return {
          id: users.userId,
          name: users.name,
          successPercentage: successRate ? `${successRate.toFixed(0)}%` : "No victories yet"
        };
    })

    res.send(playersWithWinRate);
  } catch (error) {
    res.status(500).send({ message: "Internal server error", error: error });
  }
});

/* 
*  Endpoints games
*/

//Endpoint to make a roll
app.post('/games/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);

    //Make the the roll
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2 ;
    const win = total === 7;

    const roll = new RollsModel({
      dice1: dice1,
      dice2: dice2,
      isWin: win,
      userId: userId
    })

    roll.save();

    res.status(201).send(roll);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

// Endpoint to show a player's rolls
app.get('/games/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id)
    //get the rolls by the player 
    const userRolls = await RollsModel.find({userId: userId})

    //Show a different message depending if the player has rolls or not

    if (userRolls.length === 0) return res.status(200).send({message: "This user has no rolls to show"});

    res.status(200).send(userRolls);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

// Endpoint to delete a player's rolls
app.delete('/games/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    //Check if the user exist
    const existingUser = await UserModel.findOne({ userId: userId })
    if (!existingUser) {
      return res
      .status(400)
      .send({ message: "This user does not exist" });
    }

    //If the user exists then delete all the rolls it may have
    const deleteAction = await RollsModel.deleteMany({userId: userId})
    if (deleteAction.deletedCount === 0) {
      return res.status(200).json({ message: `This player didn't have any rolls to delete` });
    }

    res.status(200).json({ message: `Rolls deleted correctly` });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

/* 
* Endpoints "ranking"
*/

// Endpoint del ranking de todos los jugadores y porcentaje medio de exitos
app.get('/ranking', async (_req, res) => {
  type RollType = {
    userId: number;
    name: string;
    rolls: Array<boolean>;
  };

  try {
    //First retrieve both Users and Rolls
    const allRolls = await RollsModel.find();
    const allUsers = await UserModel.find();

    //Iterate over the object to combine all the useful data in a single variable
    const combinedData = allRolls.map((roll) => {
      const user = allUsers.find((users) => users.userId === roll.userId);
      return {
        userId: roll.userId,
        name: user!.name,
        isWin: roll.isWin
      };
    })

    //Get the global success rate
    const globalVictoryCount = combinedData.reduce((acc, cur) => {
      return acc + (cur.isWin ? 1 : 0)
  }, 0);

    const globalSuccessRate = (globalVictoryCount / combinedData.length) * 100

    const playersAndRolls = combinedData.reduce((acc: RollType[], roll) => {
      const existingUser = acc.find((user) => user.userId === roll.userId);

      if (existingUser) {
        existingUser.rolls.push(roll.isWin!);
      } else {
        acc.push({
          userId: roll.userId!,
          name: roll.name!,
          rolls: [roll.isWin!],
        });
      }
      return acc;
    }, []);

    // Get the rate of victories and its respective players 
    const playersWithWinRate = playersAndRolls.map(users => {
      const totalRolls = users.rolls.length
      const totalWins = users.rolls.reduce((acc: Array<number>, value, index) => {
        if (value) {
          acc.push(index);
        }
        return acc;
      }, []).length;

      const successRate = (totalWins / totalRolls) * 100;

        return {
          id: users.userId,
          name: users.name,
          successPercentage: successRate.toFixed(1),
        };
    })

    const rankedPlayers = playersWithWinRate.sort((a, b) => Number(b.successPercentage) - Number(a.successPercentage))

    res.send(
      { ...rankedPlayers,
        globalSuccessRate: globalSuccessRate.toFixed(1)
      });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

// Endpoint para devolver el jugador con peor procentaje de exitos
app.get('/ranking/loser', async (_req, res) => {
  type RollType = {
    userId: number;
    name: string;
    rolls: Array<boolean>;
  };

  try {
    //First retrieve both Users and Rolls
    const allRolls = await RollsModel.find();
    const allUsers = await UserModel.find();

    //Iterate over the object to combine all the useful data in a single variable
    const combinedData = allRolls.map((roll) => {
      const user = allUsers.find((users) => users.userId === roll.userId);
      return {
        userId: roll.userId,
        name: user!.name,
        isWin: roll.isWin
      };
    }).reduce((acc: RollType[], roll) => {
      const existingUser = acc.find((user) => user.userId === roll.userId);

      if (existingUser) {
        existingUser.rolls.push(roll.isWin!);
      } else {
        acc.push({
          userId: roll.userId!,
          name: roll.name!,
          rolls: [roll.isWin!],
        });
      }
      return acc;
    }, [])
    .filter(data => data.rolls.includes(true))

    //Get the rate of victories and its respective players 
    const playersWithWinRate = combinedData.map(users => {
      const totalRolls = users.rolls.length
      const totalWins = users.rolls.reduce((acc: Array<number>, value, index) => {
        if (value) {
          acc.push(index);
        }
        return acc;
      }, []).length;

      const successRate = (totalWins / totalRolls) * 100;

        return {
          id: users.userId,
          name: users.name,
          successPercentage: successRate.toFixed(1),
        };
    })

    //sort the players form highest to lowest success percentage
    const rankedPlayers = playersWithWinRate.sort((a, b) => Number(b.successPercentage) - Number(a.successPercentage))
    
    //The player with less succesRate will alway be 
    const loserPlayer = playersWithWinRate[rankedPlayers.length - 1]

    res.send({ loserPlayer });
    
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Internal server error', error: error });
  }
});

//Endpoint to show the player with the highest success rate
app.get('/ranking/winner', async (_req, res) => {
  type RollType = {
    userId: number;
    name: string;
    rolls: Array<boolean>;
  };

  try {
    //First retrieve both Users and Rolls
    const allRolls = await RollsModel.find();
    const allUsers = await UserModel.find();

    //Iterate over the object to combine all the useful data in a single variable
    const combinedData = allRolls.map((roll) => {
      const user = allUsers.find((users) => users.userId === roll.userId);
      return {
        userId: roll.userId,
        name: user!.name,
        isWin: roll.isWin
      };
    }).reduce((acc: RollType[], roll) => {
      const existingUser = acc.find((user) => user.userId === roll.userId);

      if (existingUser) {
        existingUser.rolls.push(roll.isWin!);
      } else {
        acc.push({
          userId: roll.userId!,
          name: roll.name!,
          rolls: [roll.isWin!],
        });
      }
      return acc;
    }, [])
    .filter(data => data.rolls.includes(true))

    //Get the rate of victories and its respective players 
    const playersWithWinRate = combinedData.map(users => {
      const totalRolls = users.rolls.length
      const totalWins = users.rolls.reduce((acc: Array<number>, value, index) => {
        if (value) {
          acc.push(index);
        }
        return acc;
      }, []).length;

      const successRate = (totalWins / totalRolls) * 100;

        return {
          id: users.userId,
          name: users.name,
          successPercentage: successRate.toFixed(1),
        };
    })

    //sort the players form highest to lowest success percentage
    const rankedPlayers = playersWithWinRate.sort((a, b) => Number(b.successPercentage) - Number(a.successPercentage))
    
    //The player with less succesRate will alway be 
    const loserPlayer = rankedPlayers[0]

    res.send({ loserPlayer });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error interno del servidor', error: error });
  }
});
