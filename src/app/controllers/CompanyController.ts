import { Request, Response, Router } from "express";
import CompanyRepository from "../repositories/CompanyRepository";
import { validateCompanyData } from "../utils/validationUtilsFunction";
import {
  sendCreatedResponse,
  sendErrorResponse,
  sendNoContentResponse,
  sendSuccessResponse,
} from "../utils/responseUtils";
import { formatCnpj } from "../utils/validationUtils";

const companyRouter = Router();

// Rota GET para buscar empresas; retorna JSON com lista de empresas ou erro
companyRouter.get(
  "/",
  async (_req: Request, res: Response): Promise<Response> => {
    try {
      // Obtém a lista de empresas do repositório
      const companies = await CompanyRepository.getCompanies();
      return sendSuccessResponse(res, companies);
    } catch (error) {
      // Retorna um erro 500 se houver algum problema na busca
      return sendErrorResponse(res, 500, `Internal Server Error: ${error}`);
    }
  }
);

companyRouter.get(
  "/:company_cnpj",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      // Extrai o valor do parâmetro company_cnpj da URL da requisição
      const cnpjFromURL = req.params.company_cnpj;

      // Formata o CNPJ obtido da URL
      const formattedCnpj = formatCnpj(cnpjFromURL);

      // Busca a empresa no repositório com base no CNPJ formatado
      const company = await CompanyRepository.getCompanyByCnpj(formattedCnpj);

      // Se a empresa for encontrada, retorna a empresa com status HTTP 200 e em formato JSON
      if (company) {
        return res.status(200).json(company);
      } else {
        // Se a empresa não for encontrada, retorna uma resposta com status 404 (Not Found) e uma mensagem de erro
        return res.status(404).json({ message: "Empresa não encontrada" });
      }
    } catch (error) {
      // Em caso de erro, retorna uma resposta com status 500 (Internal Server Error) e detalhes do erro
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
      const validationErrors = validateCompanyData(companyData);

      // Realiza validações dos dados da empresa
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      // Verifica se já existe uma empresa com o CNPJ fornecido
      const existingCompany = await CompanyRepository.getCompanyByCnpj(
        companyData.company_cnpj
      );

      if (existingCompany) {
        // Retorna um erro 400 se o CNPJ já estiver cadastrado
        return sendErrorResponse(res, 400, "CNPJ já cadastrado");
      }

      // Cria uma nova empresa e a retorna em formato JSON
      const newCompany = await CompanyRepository.createCompany(companyData);
      return sendCreatedResponse(res, newCompany);
    } catch (error) {
      // Retorna um erro 500 se houver algum problema na criação da empresa
      return sendErrorResponse(res, 500, `Internal Server Error: ${error}`);
    }
  }
);

companyRouter.put(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      // Obtém o ID da empresa a ser atualizada a partir dos parâmetros da requisição
      const companyId = parseInt(req.params.id, 10);
      // Obtém os dados atualizados da empresa a partir do corpo da requisição
      const updatedData = req.body;
      const validationErrors = validateCompanyData(updatedData);

      // Realiza as mesmas validações que você fez no método POST, se necessário
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      // Obtém a empresa existente com base no ID
      const existingCompany = await CompanyRepository.getCompanyById(companyId);

      // Verifica se a empresa com o ID especificado existe
      if (!existingCompany) {
        return sendErrorResponse(res, 404, "Empresa não encontrada");
      }

      // Atualiza a empresa com os dados fornecidos
      const updatedCompany = await CompanyRepository.updateCompany(
        companyId,
        updatedData
      );

      // Verifica se a atualização foi bem-sucedida
      if (updatedCompany) {
        return res.status(200).json(updatedCompany);
      } else {
        return sendErrorResponse(res, 500, "Falha ao atualizar a empresa");
      }
    } catch (error) {
      // Retorna um erro 500 em caso de erro interno no servidor
      return sendErrorResponse(res, 500, `Internal Server Error: ${error}`);
    }
  }
);

companyRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      // Obtém o ID da empresa a ser excluída a partir dos parâmetros da requisição
      const companyId = parseInt(req.params.id, 10);

      // Tenta excluir a empresa com base no ID fornecido
      const deleted = await CompanyRepository.deleteCompany(companyId);

      if (deleted) {
        // Retorna uma resposta de sucesso (código 204) se a empresa foi excluída com sucesso
        return sendNoContentResponse(res);
      } else {
        // Retorna um erro 404 se a empresa não foi encontrada
        return sendErrorResponse(res, 404, "Empresa não encontrada");
      }
    } catch (error) {
      // Retorna um erro 500 em caso de erro interno no servidor
      return sendErrorResponse(res, 500, `Internal Server Error: ${error}`);
    }
  }
);

export default companyRouter;
