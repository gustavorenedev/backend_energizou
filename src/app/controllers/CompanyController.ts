import { Request, Response, Router } from "express";
import CompanyRepository from "../repositories/CompanyRepository";
import {
  isCNPJ,
  isCEP,
  isEndereco,
  isNumero,
  isTelefone,
  isEmail,
} from "../utils/validationUtils";

const companyRouter = Router();

// Rota GET para buscar empresas; retorna JSON com lista de empresas ou erro
companyRouter.get(
  "/",
  async (_req: Request, res: Response): Promise<Response> => {
    try {
      // Obtém a lista de empresas do repositório
      const companies = await CompanyRepository.getCompanies();
      return res.status(200).json(companies);
    } catch (error) {
      // Retorna um erro 500 se houver algum problema na busca
      return res.status(500).json(error);
    }
  }
);

// Rota POST para criar uma nova empresa; realiza validações e retorna JSON com a nova empresa ou erro
companyRouter.post(
  "/",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const companyData = req.body;

      // Verifica se já existe uma empresa com o CNPJ fornecido
      const existingCompany = await CompanyRepository.getCompanyByCnpj(
        companyData.company_cnpj
      );

      if (existingCompany) {
        // Retorna um erro 400 se o CNPJ já estiver cadastrado
        return res.status(400).json({ error: "CNPJ já cadastrado" });
      }

      // Realiza validações dos dados da empresa
      if (!isCNPJ(companyData.company_cnpj)) {
        // Retorna um erro 400 se o CNPJ fornecido for inválido
        return res
          .status(400)
          .json({ error: "CNPJ inválido, EX de input: XX.XXX.XXX/XXXX-XX" });
      }

      if (!isCEP(companyData.company_zip_code)) {
        // Retorna um erro 400 se o CEP fornecido for inválido
        return res
          .status(400)
          .json({ error: "CEP inválido, EX de input: XXXXX-XXX" });
      }

      if (!isEndereco(companyData.company_address)) {
        // Retorna um erro 400 se o endereço fornecido for inválido
        return res.status(400).json({ error: "Endereço inválido" });
      }

      if (!isNumero(companyData.company_number)) {
        // Retorna um erro 400 se o número fornecido for inválido
        return res.status(400).json({ error: "Número inválido" });
      }

      if (!isTelefone(companyData.company_phone)) {
        // Retorna um erro 400 se o telefone fornecido for inválido
        return res
          .status(400)
          .json({ error: "Telefone inválido, EX de input: +XX(XX)XXXXX-XXXX" });
      }

      if (!isEmail(companyData.company_email)) {
        // Retorna um erro 400 se o e-mail fornecido for inválido
        return res
          .status(400)
          .json({ error: "E-mail inválido, EX de input: xxxxxx@xxxx.com" });
      }

      // Cria uma nova empresa e a retorna em formato JSON
      const newCompany = await CompanyRepository.createCompany(companyData);
      return res.status(201).json(newCompany);
    } catch (error) {
      // Retorna um erro 500 se houver algum problema na criação da empresa
      return res.status(500).json(error);
    }
  }
);

export default companyRouter;
