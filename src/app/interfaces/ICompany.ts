/**
 * Interface que representa a estrutura de dados de uma empresa.
 * Ela define o formato dos dados para clientes e empresas, incluindo campos
 * como nome do cliente, senha do cliente, razão social da empresa, CNPJ, endereço, detalhes de contato, etc.
 */
interface ICompany {
  id?: number;
  client_name: string;
  client_password: string;
  company_name: string;
  company_cnpj: string;
  company_zip_code: string;
  company_address: string;
  company_number: string;
  company_phone: string;
  company_email: string;
}

export default ICompany;
