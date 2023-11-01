// import { Permissions, Claims } from "src/components/permissions/entities/permission.entity";
// import { Roles } from "src/components/roles/entities/role.entity";
// import { MigrationInterface, QueryRunner } from "typeorm"

// export class seedTestimonialPermission1672377105767 implements MigrationInterface {

//     seedData:any = [
//         {claim: 'testimonial', action: 'create', description: 'Create Testimonial'},
//         {claim: 'testimonial', action: 'list', description: 'List Testimonial'},
//         {claim: 'testimonial', action: 'retrieve', description: 'Retrieve Testimonial'},
//         {claim: 'testimonial', action: 'delete', description: 'Delete Testimonial'},
//         {claim: 'testimonial', action: 'update', description: 'Update Testimonial'}
//     ]

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         //add 'landing_page_template' in enum 'claim' at permission table
//         await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`claim\` \`claim\` enum ('space', 'user', 'role', 'customer', 'landing_page_template', 'testimonial') NOT NULL`);
//         const spaceRole = await queryRunner.manager.findOne(Roles,{where:{name:"Enterprise"}});
//         const superUserRole = await queryRunner.manager.findOne(Roles,{where:{name:"Super Admin"}});
//         const spaceUserRole = await queryRunner.manager.findOne(Roles,{where:{name:"Space Admin"}});
//         const insert_result = await queryRunner.query(`INSERT INTO permissions (claim, action, description) VALUES ${this.seedData.map((sd:any) => `('${sd.claim}' , '${sd.action}', '${sd.description}')`).join(',')};`);
//         const insert_id_start = insert_result.insertId;
//         const insert_id_end = insert_result.insertId + insert_result.affectedRows;
//         //Build query to insert data into role_permission pivot table
//         let spaceRoleQuery = "INSERT INTO role_permissions (role_id, permission_id) VALUES "
//         let superUserRoleQuery = "INSERT INTO role_permissions (role_id, permission_id) VALUES "
//         let spaceUserRoleQuery = "INSERT INTO role_permissions (role_id, permission_id) VALUES "
//         for(let i = insert_id_start; i < insert_id_end; i++){
//             spaceRoleQuery += `(${spaceRole?.id},${i})`;
//             superUserRoleQuery += `(${superUserRole?.id},${i})`;
//             spaceUserRoleQuery += `(${spaceUserRole?.id},${i})`;
//             if(i === insert_id_end-1){
//                 spaceRoleQuery += ";";
//                 superUserRoleQuery += ";";
//                 spaceUserRoleQuery += ";";
//             }else{
//                 spaceRoleQuery += ",";
//                 superUserRoleQuery += ",";
//                 spaceUserRoleQuery += ",";
//             }
//         }
//         await queryRunner.query(spaceRoleQuery);
//         await queryRunner.query(superUserRoleQuery);
//         await queryRunner.query(spaceUserRoleQuery);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         const permissions = await queryRunner.manager.findBy(Permissions,{claim:Claims.TESTIMONIAL});
//         await queryRunner.query(`DELETE FROM role_permissions WHERE permission_id IN (${permissions.map((p)=>{return p.id}).join(',')})`);
//         await queryRunner.manager.delete(Permissions,{claim:Claims.TESTIMONIAL});
//         await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`claim\` \`claim\` enum ('space', 'user', 'role', 'customer', 'landing_page_template') NOT NULL`);
//     }

// }