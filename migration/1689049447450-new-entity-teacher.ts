import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntityTeacher1689049447450 implements MigrationInterface {
    name = 'NewEntityTeacher1689049447450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, UNIQUE INDEX \`REL_4d8041cbc103a5142fa2f2afad\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`middle_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`middle_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` ADD CONSTRAINT \`FK_4d8041cbc103a5142fa2f2afad4\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`teachers\` DROP FOREIGN KEY \`FK_4d8041cbc103a5142fa2f2afad4\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`middle_name\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`middle_name\``);
        await queryRunner.query(`DROP INDEX \`REL_4d8041cbc103a5142fa2f2afad\` ON \`teachers\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
    }

}
