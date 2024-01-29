import request from 'supertest';
import { app } from '../mongodb//endpoints';
import { UserModel, RollsModel } from "../mongodb/schema";
import mongoose from "mongoose";
import mongoConnection from "../mongodb/mongodbConnection";
import { MongoMemoryServer } from "mongodb-memory-server";

let server: MongoMemoryServer

const user1 = {
    name: "Marlon Bundo.",
}

const user2 = {
    name: "Stormy",
}

const anon = {
    name: ""
}

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

describe('Tests for the "players endpoints"', () => {
    it('should save a new player and return the name in the body', async () => {
        const response = await request(app)
        .post('/players')
        .send(user1)

        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({message: `The player ${user1.name} has been created`});
    });
});