import { AppDataSource } from "../../database/data-source";
import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";

// Obtém o repositório de empresas a partir da fonte de dados
const companyRepository = AppDataSource.getRepository(Company);

/**
 * Cria uma nova empresa com os dados fornecidos e a salva.
 * @param companyData - Os dados da empresa a ser criada.
 * @returns Uma promessa (Promise) que resolve na empresa criada (ICompany).
 */
const createCompany = (companyData: ICompany): Promise<ICompany> => {
  const newCompany = companyRepository.create(companyData);
  return companyRepository.save(newCompany);
};

/**
 * Obtém uma lista de empresas.
 * @returns Uma promessa (Promise) que resolve em uma lista de empresas (ICompany[]).
 */
const getCompanies = (): Promise<ICompany[]> => {
  return companyRepository.find();
};

/**
 * Obtém uma empresa pelo número de CNPJ.
 * @param company_cnpj - O número de CNPJ da empresa a ser obtida.
 * @returns Uma promessa (Promise) que resolve na empresa encontrada (ICompany) ou nulo (null) se não encontrada.
 */
const getCompanyByCnpj = async (
  company_cnpj: string
): Promise<ICompany | null> => {
  return companyRepository.findOne({ where: { company_cnpj } });
};

/**
 * Atualiza as informações de uma empresa existente com base no seu ID.
 * @param id - O ID da empresa a ser atualizada.
 * @param updatedData - Os dados atualizados da empresa.
 * @returns Uma Promise que resolve na empresa atualizada (ICompany) ou nulo se a empresa não existir.
 */
const updateCompany = async (
  id: number,
  updatedData: ICompany
): Promise<ICompany | null> => {
  const existingCompany = await getCompanyById(id);

  if (!existingCompany) {
    return null;
  }

  const updatedCompany = companyRepository.create({
    ...existingCompany,
    ...updatedData,
  });

  return companyRepository.save(updatedCompany);
};

/**
 * Obtém uma empresa com base no seu ID único.
 * @param id - O ID da empresa a ser recuperada.
 * @returns Uma Promise que resolve na empresa encontrada (ICompany) ou nulo se não for encontrada.
 */
const getCompanyById = async (id: number): Promise<ICompany | null> => {
  return companyRepository.findOne({ where: { id: id } });
};

/**
 * Exclui uma empresa com base no seu ID.
 * @param companyId - O ID da empresa a ser excluída.
 * @returns Uma promessa (Promise) que resolve em true se a exclusão foi bem-sucedida, caso contrário, false.
 */
const deleteCompany = async (companyId: number): Promise<boolean> => {
  const result = await companyRepository.delete(companyId);
  return result.affected === 1;
};

export default {
  getCompanies,
  createCompany,
  getCompanyByCnpj,
  deleteCompany,
  updateCompany,
  getCompanyById,
};
