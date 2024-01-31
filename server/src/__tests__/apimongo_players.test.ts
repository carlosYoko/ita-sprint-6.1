import request from 'supertest';
import { app } from '../mongodb//endpoints';
import { UserModel, RollsModel } from "../mongodb/schema";
import mongoose from "mongoose";
import mongoConnection from "../mongodb/mongodbConnection";
import { MongoMemoryServer } from "mongodb-memory-server";

let server: MongoMemoryServer

describe('Tests for the /POST method of the endpoint players', () => {
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
    
    it('should save a new player and return the name in the body', async () => {
        const response = await request(app)
        .post('/players')
        .send({name: 'Marlon Bundo'})

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({message: 'The player Marlon Bundo has been created'});
    });

    it('should return the name of the player as "Anon" when non specified', async () => {
        const response = await request(app)
        .post('/players')
        .send({name: ''})

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({message: 'The player Anon has been created'});
    });

    it('should keep creating "Anon" users as long as the name property is empty', async () => {
        await request(app)
        .post('/players')
        .send({name: ''})

        await request(app)
        .post('/players')
        .send({name: ''})

        const anonUsers = await UserModel.find({ name: "Anon"})

        expect(anonUsers).toHaveLength(3);
    });

    it('should return an error if the user already exists', async () => {
        const response = await request(app)
        .post('/players')
        .send({name: 'Marlon Bundo'})

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({message: "There is already a player with this name"});
    });
});

describe('Tests for the /PUT method of the endpoint players', () => {
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

    it('should change the username in the database when it does not exist', async () => {
        await request(app)
        .post('/players')
        .send({name: 'Marlon Bundo'})

        const response = await request(app)
        .put('/players/1')
        .send({name: 'Pipkin'})

        const searchAfterChange = await UserModel.findOne({name: 'Pipkin'})

        //Database test
        expect(searchAfterChange?.name).toBe('Pipkin');

        //Response test
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: 'The name has been updated to: "Pipkin"'});
    });

    it('should send an error when the username already exists', async () => {
        const response = await request(app)
        .put('/players/1')
        .send({name: 'Pipkin'})

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({error: "The username is already taken!"});
    });
});

describe('Tests for the /GET method of the endpoint players', () => {
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
    
    it('should return all the current players succes rate and display an specific message if one has not won yet', async () => {


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
            "userId": 2,
        })

        await UserModel.create({
            "userId": "1",
            "name": "Marlon Bundo"
        },{
            "userId": "2",
            "name": "Pipkin"
        })

        const response = await request(app).get("/players")

        expect(response.body).toEqual([
                {
                    id: 2,
                    name: "Pipkin",
                    successPercentage: "No victories yet",
                },
                {
                    id: 1,
                    name: "Marlon Bundo",
                    successPercentage: "50%",
                }
            ]);
    });
});