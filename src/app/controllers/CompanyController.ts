import { Request, Response, Router } from "express";
import CompanyRepository from "../repositories/CompanyRepository";

const companyRouter = Router();

// Rota GET para buscar empresas; retorna JSON com lista de empresas ou erro
companyRouter.get(
  "/",
  async (_req: Request, res: Response): Promise<Response> => {
    try {
      const companies = await CompanyRepository.getCompanies();
      return res.status(200).json(companies);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);

export default companyRouter;
