import { MigrationInterface, QueryRunner } from "typeorm"

export class SeedInitialPermissions1689050926904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO permissions (claim, action, description)
            VALUES
            ('user', 'create', 'Create User'),
            ('user', 'read', 'Read User'),
            ('user', 'update', 'Update User'),
            ('user', 'delete', 'Delete User'),
            ('role', 'create', 'Create Role'),
            ('role', 'read', 'Read Role'),
            ('role', 'update', 'Update Role'),
            ('role', 'delete', 'Delete Role'),
            ('student', 'create', 'Create Student'),
            ('student', 'read', 'Read Student'),
            ('student', 'update', 'Update Student'),
            ('student', 'delete', 'Delete Student'),
            ('teacher', 'create', 'Create Teacher'),
            ('teacher', 'read', 'Read Teacher'),
            ('teacher', 'update', 'Update Teacher'),
            ('teacher', 'delete', 'Delete Teacher')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM permissions`)
    }

}