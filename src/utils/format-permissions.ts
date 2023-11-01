import { Roles } from 'src/components/roles/entities/role.entity';
import { Permissions } from 'src/components/permissions/entities/permission.entity'
export const formatPermission = (roles:any) =>{
  const getPermissions = (roles:Roles) => {
    console.log("roles: ", roles);
    return roles.permissions.map((p) =>{
      return {
        [`${p.claim}`]:`${p.action}`,
      }
    });
  }
  const permissions = getPermissions(roles);
  roles.permissions = permissions;
  
  return roles;
}