import { Permissions } from './entities/permission.entity'; 
import { Roles } from '../roles/entities/role.entity';
import { MainRepository } from 'src/main/main.repository';

export class PermissionsRepository extends MainRepository{

  async getAllPermissions(user: any) {
    const spaceRoles:Roles[] = user.space.roles;
    var permissions: Permissions[] = [];
    spaceRoles.forEach((role:Roles) => {
      permissions = [...permissions, ...role.permissions]
    });
    const uniquePermissions = [...new Map(permissions.map((m) => [m.id, m])).values()];
    return uniquePermissions;
  }
}
