// import { MigrationInterface, QueryRunner } from "typeorm";

// export class initialmigration1661338373979 implements MigrationInterface {
//     name = 'initialmigration1661338373979'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`claim\` enum ('space', 'user', 'role', 'customer') NOT NULL, \`action\` enum ('create', 'retrieve', 'update', 'list', 'delete') NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`context\` enum ('platform', 'space', 'self') NOT NULL, \`type\` enum ('user', 'space') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`spaces\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`contact_name\` varchar(255) NOT NULL, \`contact_email\` varchar(255) NOT NULL, \`contact_phone\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`space_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`time_zones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`offset\` int NOT NULL, \`offset_dst\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`job_title\` varchar(255) NOT NULL, \`send_testimonial_email\` tinyint NOT NULL, \`is_deleted\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`spaceId\` int NULL, \`timezone\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`customer_activity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`timestamp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`type\` enum ('created', 'requestemailsent', 'requestemailopened', 'followupemailsent', 'followupemailopened', 'testimonialreceived') NOT NULL, \`metadata\` json NOT NULL, \`customer_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`space_id\` int NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`user_activity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`timestamp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`type\` enum ('register', 'login', 'logout', 'update') NOT NULL, \`metadata\` json NOT NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`user_profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`first_name\` varchar(255) NULL, \`last_name\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, UNIQUE INDEX \`REL_eee360f3bff24af1b689076520\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`role_permissions\` (\`role_id\` int NOT NULL, \`permission_id\` int NOT NULL, INDEX \`IDX_178199805b901ccd220ab7740e\` (\`role_id\`), INDEX \`IDX_17022daf3f885f7d35423e9971\` (\`permission_id\`), PRIMARY KEY (\`role_id\`, \`permission_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`space_roles\` (\`space_id\` int NOT NULL, \`role_id\` int NOT NULL, INDEX \`IDX_61c9a685664331f89c4a746e54\` (\`space_id\`), INDEX \`IDX_4be59fb078e6f0026fb5f877c2\` (\`role_id\`), PRIMARY KEY (\`space_id\`, \`role_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`customer_tags\` (\`customer_id\` int NOT NULL, \`tag_id\` int NOT NULL, INDEX \`IDX_40fefeebc64ed8fe22bc3c18a1\` (\`customer_id\`), INDEX \`IDX_489550d8317a3551c3b10a98f3\` (\`tag_id\`), PRIMARY KEY (\`customer_id\`, \`tag_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`user_roles\` (\`user_id\` int NOT NULL, \`role_id\` int NOT NULL, INDEX \`IDX_87b8888186ca9769c960e92687\` (\`user_id\`), INDEX \`IDX_b23c65e50a758245a33ee35fda\` (\`role_id\`), PRIMARY KEY (\`user_id\`, \`role_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_d0752bbff60d957dce16441fa49\` FOREIGN KEY (\`space_id\`) REFERENCES \`spaces\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_97f5f368c34427c7835863acd4d\` FOREIGN KEY (\`spaceId\`) REFERENCES \`spaces\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_86419be23a4203aee622d78c28a\` FOREIGN KEY (\`timezone\`) REFERENCES \`time_zones\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`customer_activity\` ADD CONSTRAINT \`FK_c4b9caf1c0e0806038a9d79423f\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_615e95e09ef20089b994801a254\` FOREIGN KEY (\`space_id\`) REFERENCES \`spaces\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`user_activity\` ADD CONSTRAINT \`FK_11108754ec780c670440e32baad\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`user_profile\` ADD CONSTRAINT \`FK_eee360f3bff24af1b6890765201\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`role_permissions\` ADD CONSTRAINT \`FK_178199805b901ccd220ab7740ec\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`role_permissions\` ADD CONSTRAINT \`FK_17022daf3f885f7d35423e9971e\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permissions\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`space_roles\` ADD CONSTRAINT \`FK_61c9a685664331f89c4a746e548\` FOREIGN KEY (\`space_id\`) REFERENCES \`spaces\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`space_roles\` ADD CONSTRAINT \`FK_4be59fb078e6f0026fb5f877c24\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`customer_tags\` ADD CONSTRAINT \`FK_40fefeebc64ed8fe22bc3c18a1c\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`customer_tags\` ADD CONSTRAINT \`FK_489550d8317a3551c3b10a98f3c\` FOREIGN KEY (\`tag_id\`) REFERENCES \`tags\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`user_roles\` ADD CONSTRAINT \`FK_87b8888186ca9769c960e926870\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//         await queryRunner.query(`ALTER TABLE \`user_roles\` ADD CONSTRAINT \`FK_b23c65e50a758245a33ee35fda1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE \`user_roles\` DROP FOREIGN KEY \`FK_b23c65e50a758245a33ee35fda1\``);
//         await queryRunner.query(`ALTER TABLE \`user_roles\` DROP FOREIGN KEY \`FK_87b8888186ca9769c960e926870\``);
//         await queryRunner.query(`ALTER TABLE \`customer_tags\` DROP FOREIGN KEY \`FK_489550d8317a3551c3b10a98f3c\``);
//         await queryRunner.query(`ALTER TABLE \`customer_tags\` DROP FOREIGN KEY \`FK_40fefeebc64ed8fe22bc3c18a1c\``);
//         await queryRunner.query(`ALTER TABLE \`space_roles\` DROP FOREIGN KEY \`FK_4be59fb078e6f0026fb5f877c24\``);
//         await queryRunner.query(`ALTER TABLE \`space_roles\` DROP FOREIGN KEY \`FK_61c9a685664331f89c4a746e548\``);
//         await queryRunner.query(`ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_17022daf3f885f7d35423e9971e\``);
//         await queryRunner.query(`ALTER TABLE \`role_permissions\` DROP FOREIGN KEY \`FK_178199805b901ccd220ab7740ec\``);
//         await queryRunner.query(`ALTER TABLE \`user_profile\` DROP FOREIGN KEY \`FK_eee360f3bff24af1b6890765201\``);
//         await queryRunner.query(`ALTER TABLE \`user_activity\` DROP FOREIGN KEY \`FK_11108754ec780c670440e32baad\``);
//         await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_615e95e09ef20089b994801a254\``);
//         await queryRunner.query(`ALTER TABLE \`customer_activity\` DROP FOREIGN KEY \`FK_c4b9caf1c0e0806038a9d79423f\``);
//         await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_86419be23a4203aee622d78c28a\``);
//         await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_97f5f368c34427c7835863acd4d\``);
//         await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_d0752bbff60d957dce16441fa49\``);
//         await queryRunner.query(`DROP INDEX \`IDX_b23c65e50a758245a33ee35fda\` ON \`user_roles\``);
//         await queryRunner.query(`DROP INDEX \`IDX_87b8888186ca9769c960e92687\` ON \`user_roles\``);
//         await queryRunner.query(`DROP TABLE \`user_roles\``);
//         await queryRunner.query(`DROP INDEX \`IDX_489550d8317a3551c3b10a98f3\` ON \`customer_tags\``);
//         await queryRunner.query(`DROP INDEX \`IDX_40fefeebc64ed8fe22bc3c18a1\` ON \`customer_tags\``);
//         await queryRunner.query(`DROP TABLE \`customer_tags\``);
//         await queryRunner.query(`DROP INDEX \`IDX_4be59fb078e6f0026fb5f877c2\` ON \`space_roles\``);
//         await queryRunner.query(`DROP INDEX \`IDX_61c9a685664331f89c4a746e54\` ON \`space_roles\``);
//         await queryRunner.query(`DROP TABLE \`space_roles\``);
//         await queryRunner.query(`DROP INDEX \`IDX_17022daf3f885f7d35423e9971\` ON \`role_permissions\``);
//         await queryRunner.query(`DROP INDEX \`IDX_178199805b901ccd220ab7740e\` ON \`role_permissions\``);
//         await queryRunner.query(`DROP TABLE \`role_permissions\``);
//         await queryRunner.query(`DROP INDEX \`REL_eee360f3bff24af1b689076520\` ON \`user_profile\``);
//         await queryRunner.query(`DROP TABLE \`user_profile\``);
//         await queryRunner.query(`DROP TABLE \`user_activity\``);
//         await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
//         await queryRunner.query(`DROP TABLE \`users\``);
//         await queryRunner.query(`DROP TABLE \`customer_activity\``);
//         await queryRunner.query(`DROP TABLE \`customers\``);
//         await queryRunner.query(`DROP TABLE \`time_zones\``);
//         await queryRunner.query(`DROP TABLE \`tags\``);
//         await queryRunner.query(`DROP TABLE \`spaces\``);
//         await queryRunner.query(`DROP INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` ON \`roles\``);
//         await queryRunner.query(`DROP TABLE \`roles\``);
//         await queryRunner.query(`DROP TABLE \`permissions\``);
//     }

// }
