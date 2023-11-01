/**
 * Configura e inicializa uma fonte de dados (DataSource) para se conectar a um banco de dados MySQL
 * com base nas variáveis de ambiente definidas no arquivo .env.
 * Este código utiliza a biblioteca TypeORM para criar e configurar a fonte de dados.
 */
import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
