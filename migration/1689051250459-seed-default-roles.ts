import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedDefaultRoles1689051250459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const permissions = await queryRunner.query(`SELECT * FROM permissions`);
        const superAdminRole = await queryRunner.query(`INSERT INTO roles (name) VALUES ('Super Admin')`);
        const adminRole = await queryRunner.query(`INSERT INTO roles (name) VALUES ('Admin')`);
        const teacherRole = await queryRunner.query(`INSERT INTO roles (name) VALUES ('Teacher')`);
        await queryRunner.query(`INSERT INTO role_permissions (role_id, permission_id)
            VALUES
            ${permissions.map((permission: { id: any; }) => `('${superAdminRole.insertId}', '${permission.id}')`).join(',')};    
        `);
        await queryRunner.query(`INSERT INTO role_permissions (role_id, permission_id)
            VALUES
            ${permissions.map((permission: { id: any; }) => `('${adminRole.insertId}', '${permission.id}')`).join(',')};    
        `);
        await queryRunner.query(`INSERT INTO role_permissions (role_id, permission_id)
            VALUES
            ${permissions.map((permission: { id: any; }) => `('${teacherRole.insertId}', '${permission.id}')`).join(',')};    
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM role_permissiosn`);
        await queryRunner.query(`DELETE FROM roles`);
    }

}
