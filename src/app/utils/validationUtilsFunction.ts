// validationUtils.ts

import {
  isCNPJ,
  isCEP,
  isEndereco,
  isNumero,
  isTelefone,
  isEmail,
} from "./validationUtils";

/**
 * Valida os dados da empresa.
 * @param companyData - Os dados da empresa a serem validados.
 * @returns Uma lista de erros de validação, ou uma lista vazia se os dados forem válidos.
 */
export function validateCompanyData(companyData: any): string[] {
  const errors: string[] = [];

  if (!isCNPJ(companyData.company_cnpj)) {
    errors.push("CNPJ inválido, EX de input: XX.XXX.XXX/XXXX-XX");
  }

  if (!isCEP(companyData.company_zip_code)) {
    errors.push("CEP inválido, EX de input: XXXXX-XXX");
  }

  if (!isEndereco(companyData.company_address)) {
    errors.push("Endereço inválido");
  }

  if (!isNumero(companyData.company_number)) {
    errors.push("Número inválido");
  }

  if (!isTelefone(companyData.company_phone)) {
    errors.push("Telefone inválido, EX de input: +XX(XX)XXXXX-XXXX");
  }

  if (!isEmail(companyData.company_email)) {
    errors.push("E-mail inválido, EX de input: xxxxxx@xxxx.com");
  }

  return errors;
}
