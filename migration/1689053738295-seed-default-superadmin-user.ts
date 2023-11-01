import * as bcrypt from "bcrypt";
import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedDefaultSuperadminUser1689053738295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const email = 'superadmin@school.com';
        const passwordHash = await bcrypt.hash('superadmin', 10);
        const user = await queryRunner.query(`INSERT INTO users (email, password, first_name, last_name)
            VALUES ('${email}', '${passwordHash}', 'Super', 'Admin')`);
        await queryRunner.query(`INSERT INTO user_activity (type, user_id, metadata) VALUES ('register', ${user.insertId}, '{"description": "Registered as new user"}')`);
        await queryRunner.query(`INSERT INTO admins (userId) VALUES (${user.insertId})`);
        const superAdminRole = await queryRunner.query(`SELECT * FROM roles where name='Super Admin'`);
        await queryRunner.query(`INSERT INTO user_role (user_id, role_id) VALUES (${user.insertId}, ${superAdminRole[0].id})`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM user_role`);
        await queryRunner.query(`DELETE FROM admins`);
        await queryRunner.query(`DELETE FROM user_activity`);
        await queryRunner.query(`DELETE FROM users`);
    }

}