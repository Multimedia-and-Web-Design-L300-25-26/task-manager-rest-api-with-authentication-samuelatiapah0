import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// Load .env.test for test environment  
dotenv.config({ path: ".env.test" });

let mongoServer;

beforeAll(async () => {
    // Start in-memory MongoDB
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    process.env.MONGO_URI = mongoUri;

    // Connect to in-memory database
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    // Disconnect and stop MongoDB
    await mongoose.disconnect();
    if (mongoServer) {
        await mongoServer.stop();
    }
});

import app from "../src/app.js";

export default app;