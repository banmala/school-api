import { MigrationInterface, QueryRunner } from "typeorm";

export class SetNullableValues1689053505634 implements MigrationInterface {
    name = 'SetNullableValues1689053505634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`middle_name\` \`middle_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`middle_name\` \`middle_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

}
