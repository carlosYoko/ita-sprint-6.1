import request from 'supertest';
import { app } from '../mongodb//endpoints';
import { UserModel, RollsModel } from "../mongodb/schema";
import mongoose from "mongoose";
import mongoConnection from "../mongodb/mongodbConnection";
import { MongoMemoryServer } from "mongodb-memory-server";
import { response } from 'express';

let server: MongoMemoryServer

describe('Tests for the /POST method of the endpoint player', () => {
    beforeAll(async () => {
        try {
            server = await MongoMemoryServer.create();
            await mongoConnection(server.getUri())
        } catch (error) {
            console.error(error)
        }
    });
    
    afterAll(async () => {
        await mongoose.connection.close();
        await server.stop();
    });

    it('should make the roll and store it', async () => {

        await UserModel.create({
            "userId": "1",
            "name": "Marlon Bundo"
        },{
            "userId": "2",
            "name": "Pipkin"
        })

        const response = await request(app)
        .post("/games/1")
        .send()

        const storedRoll = await RollsModel.findOne({userId: 1})

        expect(response.statusCode).toBe(201);
        expect(storedRoll?.userId).toBe(response.body.userId);
        expect(storedRoll?.dice1).toBe(response.body.dice1);
        expect(storedRoll?.dice2).toBe(response.body.dice2);
        expect(storedRoll?.isWin).toBe(response.body.isWin);
    });
});

describe('Tests for the /GET method of the endpoint player', () => {
    beforeAll(async () => {
        try {
            server = await MongoMemoryServer.create();
            await mongoConnection(server.getUri())
        } catch (error) {
            console.error(error)
        }
    });
    
    afterAll(async () => {
        await mongoose.connection.close();
        await server.stop();
    });

    it('should return an array with all the rolls a player has made and display an specific message if the use has no rolls', async () => {
        await RollsModel.create({
            "dice1": 2,
            "dice2": 3,
            "isWin": false,
            "userId": 1,
        },
        {
            "dice1": 4,
            "dice2": 3,
            "isWin": true,
            "userId": 1,
        },{
            "dice1": 2,
            "dice2": 3,
            "isWin": false,
            "userId": 1,
        });

        await UserModel.create({
            "userId": "1",
            "name": "Marlon Bundo"
        },{
            "userId": "2",
            "name": "Pipkin"
        });

        const responseUserWithRolls = await request(app).get("/games/1")
        const responseUserWithoutRolls = await request(app).get("/games/2")

        expect(responseUserWithRolls.statusCode).toBe(200);
        expect(responseUserWithRolls.body).toHaveLength(3);

        expect(responseUserWithoutRolls.statusCode).toBe(200);
        expect(responseUserWithoutRolls.body).toEqual({message: "This user has no rolls to show"});
    });
});

describe('Tests for the /DELETE method of the endpoint players', () => {
    beforeAll(async () => {
        try {
            server = await MongoMemoryServer.create();
            await mongoConnection(server.getUri())
        } catch (error) {
            console.error(error)
        }
    });
    
    afterAll(async () => {
        await mongoose.connection.close();
        await server.stop();
    });
    
    it('should delete all rolls from a player', async () => {
        await RollsModel.create({
            "dice1": 2,
            "dice2": 3,
            "isWin": false,
            "userId": 1,
        },
        {
            "dice1": 4,
            "dice2": 3,
            "isWin": true,
            "userId": 1,
        })

        await UserModel.create({
            "userId": "1",
            "name": "Marlon Bundo"
        })

        const searchBeforeDeleting = await RollsModel.find()

        const response = await request(app)
        .delete("/games/1")

        const searchAfterDeleting = await RollsModel.find()

        expect(response.statusCode).toBe(200);
        expect(searchBeforeDeleting).toHaveLength(2);
        expect(searchAfterDeleting).toHaveLength(0);
    });

    it('should send an error if the user does not exists', async () => {
        const response = await request(app)
        .delete("/games/2")

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({message: "This user does not exist"});
    });

    it('should display an specific message if the user does not have any rolls', async () => {
        const response = await request(app)
        .delete("/games/1")

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: "This player didn't have any rolls to delete"});
    });
});