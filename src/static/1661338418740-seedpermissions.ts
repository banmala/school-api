// import { MigrationInterface, QueryRunner } from "typeorm"

// export class seedpermissions1661338418740 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`INSERT INTO permissions (claim, action, description)
//             VALUES
//             ('space', 'create', 'Create Space'),
//             ('space', 'retrieve', 'Retrieve Space'),
//             ('space', 'update', 'Update Space'),
//             ('space', 'list', 'List Spaces'),
//             ('space', 'delete', 'Delete Space'),
//             ('user', 'create', 'Create User'),
//             ('user', 'retrieve', 'Retrieve User'),
//             ('user', 'update', 'Update User'),
//             ('user', 'list', 'List Users'),
//             ('user', 'delete', 'Delete User'),
//             ('role', 'create', 'Create Role'),
//             ('role', 'retrieve', 'Retrieve Role'),
//             ('role', 'update', 'Update Role'),
//             ('role', 'list', 'List Roles'),
//             ('role', 'delete', 'Delete Role')`)
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DELETE FROM permissions`)
//     }

// }
