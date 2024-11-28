import express from 'express';
import cors from 'cors';
import { router } from './router';

const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

server.listen(8080, () => console.log('Rodando...'))