/**
 * Inicializa o servidor Express e a fonte de dados.
 *
 * @param app - Uma instância do servidor Express.
 * @param port - A porta na qual o servidor será iniciado.
 */
import express from "express";
import { AppDataSource } from "../database/data-source";

export async function startServer(app: express.Express, port: number) {
  try {
    await AppDataSource.initialize();
    console.log("Database OK");

    const port = 3000;
    app.listen(port, () => {
      console.log(`Server iniciado na porta ${port}`);
    });
  } catch (error) {
    console.error("Erro ao inicializar o database:", error);
  }
}
