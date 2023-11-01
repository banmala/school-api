// import { MigrationInterface, QueryRunner } from "typeorm"

// export class seeddefaultspace1661338463093 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         const space = await queryRunner.query(`INSERT INTO spaces (name, contact_name, contact_email, contact_phone) VALUES ('Wolfmatrix', 'Pujan Poudyal', 'pujan.poudyal@wolfmatrix.com', '9841789556')`);
//         const spaceRoles = await queryRunner.query(`SELECT * FROM roles where type='space'`);
//         await queryRunner.query(`INSERT INTO space_roles (space_id, role_id) VALUES (${space.insertId}, ${spaceRoles[0].id})`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DELETE FROM space_roles`);
//         await queryRunner.query(`DELETE FROM spaces`);
//     }

// }
