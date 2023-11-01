// import { MigrationInterface, QueryRunner } from "typeorm"
// import * as bcrypt from 'bcrypt';

// export class seeddefaultuser1661338477775 implements MigrationInterface {

    // public async up(queryRunner: QueryRunner): Promise<void> {
    //     const email = 'superadmin@wolfmatrix.com';
    //     const passwordHash = await bcrypt.hash('admin', 10);
    //     const spaces = await queryRunner.query(`SELECT * from spaces`);
    //     const user = await queryRunner.query(`INSERT INTO users (email, password, space_id)
    //         VALUES ('${email}', '${passwordHash}', ${spaces[0].id})`);
    //     await queryRunner.query(`INSERT INTO user_activity (type, user_id, metadata) VALUES ('register', ${user.insertId}, '{"description": "Registered as new user"}')`);
    //     await queryRunner.query(`INSERT INTO user_profile (email, user_id, first_name, last_name) VALUES ('${email}', ${user.insertId}, 'Super', 'Admin')`);
    //     const userRoles = await queryRunner.query(`SELECT * FROM roles where type='user'`);
    //     await queryRunner.query(`INSERT INTO user_roles (user_id, role_id) VALUES (${user.insertId}, ${userRoles[0].id})`);
    // }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    //     await queryRunner.query(`DELETE FROM user_roles`);
    //     await queryRunner.query(`DELETE FROM user_profile`);
    //     await queryRunner.query(`DELETE FROM user_activity`);
    //     await queryRunner.query(`DELETE FROM users`);
    // }

// }
