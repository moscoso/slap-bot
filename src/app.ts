import { BotServer } from './server/BotServer';
import dotenv from "dotenv"

// Uses the dotenv package to load the environment variables from the .env file
dotenv.config();

// Create the server and start it
const server = BotServer.getInstance();
server.start();

