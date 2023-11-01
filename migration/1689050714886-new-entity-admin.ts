import { MigrationInterface, QueryRunner } from "typeorm";

export class NewEntityAdmin1689050714886 implements MigrationInterface {
    name = 'NewEntityAdmin1689050714886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admins\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, UNIQUE INDEX \`REL_420cf6d31487d2f341b40d52e3\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admins\` ADD CONSTRAINT \`FK_420cf6d31487d2f341b40d52e37\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admins\` DROP FOREIGN KEY \`FK_420cf6d31487d2f341b40d52e37\``);
        await queryRunner.query(`DROP INDEX \`REL_420cf6d31487d2f341b40d52e3\` ON \`admins\``);
        await queryRunner.query(`DROP TABLE \`admins\``);
    }

}
