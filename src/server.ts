/**
 * Inicializa um servidor Express, configurando rotas e portas com base em variáveis de ambiente.
 * Este código também carrega as configurações definidas no arquivo .env.
 */
import "reflect-metadata";
import express from "express";
import cors from "cors";
import { startServer } from "./server/server-startup";
import dotenv from "dotenv";
import routers from "./app/routes/routes";

dotenv.config();

const app = express();
const port = Number(process.env.LOCAL_PORT);
app.use(cors());
app.use(express.json());
app.use(routers);

startServer(app, port);
