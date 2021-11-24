import dotenv from 'dotenv';
import Server from './bin/server';

dotenv.config();

const server = new Server();

server.listen()

