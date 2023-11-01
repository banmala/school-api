import { CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { Roles } from 'src/components/roles/entities/role.entity';

export const PermissionGuard = (permission:string):any =>{
    class PermissionGuardMixin implements CanActivate {
        constructor(){}

        canActivate(context: ExecutionContext,){
            const request = context.switchToHttp().getRequest();
            return request.user.roles.some((role:Roles)=>{
                return role.permissions.some((p:any)=>{
                    if(permission in p){
                        return true;
                    }else{
                        return false;
                    }
                })
            })
        }
    }
    return mixin(PermissionGuardMixin);
}
