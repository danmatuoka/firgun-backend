import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1668883772189 implements MigrationInterface {
    name = 'createUser1668883772189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(40) NOT NULL, \`surname\` varchar(40) NOT NULL, \`email\` varchar(40) NOT NULL, \`telephone\` varchar(255) NOT NULL, \`celphone\` varchar(255) NOT NULL, \`birth_date\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`street\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`cpf_cnpj\` varchar(255) NOT NULL, \`meet_firgun\` varchar(300) NOT NULL, \`motive\` varchar(300) NOT NULL, \`is_adm\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_454071ca2c83ce9a1fe9b27c54\` (\`celphone\`), UNIQUE INDEX \`IDX_c0f67bf13347e567a6487bcef2\` (\`cpf_cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_c0f67bf13347e567a6487bcef2\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_454071ca2c83ce9a1fe9b27c54\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
