/**
 * Define uma entidade 'Company' com colunas correspondentes no banco de dados.
 * Esta classe mapeia para uma tabela do banco de dados chamada 'companies' e define a estrutura e tipos de dados
 * para cada coluna, incluindo atributos como nome da empresa, CNPJ, endereço e informações de contato.
 */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
class Company {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 120, nullable: false })
  client_name: string;

  @Column("varchar", { length: 255, nullable: false })
  client_password: string;

  @Column("varchar", { length: 255, nullable: false })
  company_name: string;

  @Column("varchar", { length: 18, nullable: false, unique: true })
  company_cnpj: string;

  @Column("varchar", { length: 9, nullable: false })
  company_zip_code: string;

  @Column("varchar", { length: 150, nullable: false })
  company_address: string;

  @Column("varchar", { length: 10, nullable: false })
  company_number: string;

  @Column("varchar", { length: 17, nullable: false })
  company_phone: string;

  @Column("varchar", { length: 255, nullable: false })
  company_email: string;
}

export default Company;
