import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompaniesTable1698845112348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "client_name",
            type: "varchar",
            length: "120",
            isNullable: false,
          },
          {
            name: "client_password",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "company_name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "company_cnpj",
            type: "varchar",
            length: "18",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "company_zip_code",
            type: "varchar",
            length: "9",
            isNullable: false,
          },
          {
            name: "company_address",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "company_number",
            type: "varchar",
            length: "10",
            isNullable: false,
          },
          {
            name: "company_phone",
            type: "varchar",
            length: "17",
            isNullable: false,
          },
          {
            name: "company_email",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
