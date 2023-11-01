// import { MigrationInterface, QueryRunner } from "typeorm"

// export class seeddefaultrolepermissions1661338445347 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         const permissions = await queryRunner.query(`SELECT * FROM permissions`);
//         const spaceRole = await queryRunner.query(`INSERT INTO roles (name, context, type) VALUES ('Enterprise', 'platform', 'space')`);
//         const userRole = await queryRunner.query(`INSERT INTO roles (name, context, type) VALUES ('Super Admin', 'platform', 'user')`);
//         await queryRunner.query(`INSERT INTO role_permissions (role_id, permission_id)
//             VALUES
//             ${permissions.map((permission: { id: any; }) => `('${spaceRole.insertId}', '${permission.id}')`).join(',')};    
//         `);
//         await queryRunner.query(`INSERT INTO role_permissions (role_id, permission_id)
//             VALUES
//             ${permissions.map((permission: { id: any; }) => `('${userRole.insertId}', '${permission.id}')`).join(',')};    
//         `);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DELETE FROM role_permissiosn`);
//         await queryRunner.query(`DELETE FROM roles`);
//     }

// }
