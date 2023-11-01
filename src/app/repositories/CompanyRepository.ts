import { AppDataSource } from "../../database/data-source";
import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";

// Obtém o repositório de empresas a partir da fonte de dados
const companyRepository = AppDataSource.getRepository(Company);

// Obtém uma lista de empresas
const getCompanies = (): Promise<ICompany[]> => {
  return companyRepository.find();
};

export default {
  getCompanies,
};
