import { MigrationInterface, QueryRunner } from "typeorm";

export class insertData1669045907540 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`users\` (\`name\`, \`surname\`, \`email\`, \`telephone\`, \`celphone\`, \`birth_date\`, \`cep\`, \`state\`, \`city\`, \`street\`, \`district\`, \`cpf_cnpj\`, \`meet_firgun\`, \`motive\`, \`is_adm\`) VALUES ("José", "Silva", "josesilva@mail.com", "1112346789", "11912346789", "01/01/1990", "01010123", "SP", "São Paulo", "Rua teste", "Bairro teste", "917.470.260-26", "teste", "teste", false), ("Admin", "Silva", "admin@mail.com", "1122346789", "11912345789", "01/01/1990", "01010123", "SP", "São Paulo", "Rua teste", "Bairro teste", "170.573.990-30", "teste", "teste", true)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "users"`);
  }
}
