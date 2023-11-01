/** Verifica se a string corresponde ao padrão CNPJ (XX.XXX.XXX/XXXX-XX).
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão, caso contrário, `false`.
 * Exemplo de entrada: "12.345.678/0001-90"
 * Saída: `true` (corresponde ao padrão) ou `false` (não corresponde).
 */
export const isCNPJ = (value: string): boolean => {
  const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/;
  return cnpjPattern.test(value);
};

/** Verifica se a string corresponde ao padrão CEP (XXXXX-XXX).
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão, caso contrário, `false`.
 * Exemplo de entrada: "12345-678"
 * Saída: `true` (corresponde ao padrão) ou `false` (não corresponde).
 */
export const isCEP = (value: string): boolean => {
  const cepPattern = /^\d{5}-\d{3}/;
  return cepPattern.test(value);
};

/** Verifica se a string contém apenas letras, números e espaços.
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão, caso contrário, `false`.
 * Exemplo de entrada: "Rua dos Exemplos 123"
 * Saída: `true` (corresponde ao padrão) ou `false` (não corresponde).
 */
export const isEndereco = (value: string): boolean => {
  const enderecoPattern = /^[a-zA-Z0-9\s]+/;
  return enderecoPattern.test(value);
};

/** Verifica se a string corresponde a um número inteiro de até 6 dígitos.
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão, caso contrário, `false`.
 * Exemplo de entrada: "12345"
 * Saída: `true` (corresponde ao padrão) ou `false` (não corresponde).
 */
export const isNumero = (value: string): boolean => {
  const numeroPattern = /^\d{1,6}/;
  return numeroPattern.test(value);
};

/** Verifica se a string corresponde ao padrão de telefone internacional (+55(XX)XXXXX-XXXX).
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão, caso contrário, `false`.
 * Exemplo de entrada: "+55(11)12345-6789"
 * Saída: `true` (corresponde ao padrão) ou `false` (não corresponde).
 */
export const isTelefone = (value: string): boolean => {
  const telefonePattern = /^\+55\(\d{2}\)\d{5}-\d{4}/;
  return telefonePattern.test(value);
};

/** Verifica se a string corresponde a um endereço de e-mail válido.
 * @param value - A string a ser validada.
 * @returns `true` se corresponder ao padrão de e-mail válido, caso contrário, `false`.
 * Exemplo de entrada: "example@email.com"
 * Saída: `true` (corresponde ao padrão de e-mail válido) ou `false` (não corresponde).
 */
export const isEmail = (value: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  return emailPattern.test(value);
};

/** Formata um CNPJ como "XX.XXX.XXX/XXXX-XX".
 * @param cnpj - O CNPJ a ser formatado.
 * @returns O CNPJ formatado.
 * Exemplo de entrada: "12345678000190"
 * Saída: "12.345.678/0001-90"
 */
export const formatCnpj = (cnpj: string): string => {
  const cleanedCnpj = cnpj.replace(/[^0-9]/g, "");

  // Formate o CNPJ como "XX.XXX.XXX/XXXX-XX"
  return `${cleanedCnpj.substring(0, 2)}.${cleanedCnpj.substring(2, 5)}
  .${cleanedCnpj.substring(5, 8)}/${cleanedCnpj.substring(8, 12)}
  -${cleanedCnpj.substring(12)}`;
};
