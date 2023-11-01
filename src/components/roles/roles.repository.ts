import { NotFoundException } from '@nestjs/common';
import { EntityManager, In } from 'typeorm';
import { Permissions } from '../permissions/entities/permission.entity';
import { CreateRoleDto } from './dto/create-role.input.dto';
import { Roles } from './entities/role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { MainRepository } from 'src/main/main.repository';

export class RolesRepository extends MainRepository{
  async saveRoles(createRoleDto: CreateRoleDto, user: any) {
    const roleData: CreateRoleDto = createRoleDto;

    const execute = async (runner: EntityManager) => {
      const roles = await runner.save(Roles, roleData);
      return roles;
    };
    return this.mainService.runTransaction(execute);
  }

  async getAllRoles(user: any, asFeature: Boolean) {
    if (asFeature) return user.space.roles;
    return user.roles;
  }

  async updateRoles(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.mainService.filterBy({ id: id }).findOne(Roles);
    if (role) {
      if (updateRoleDto.permissions) {
        const permissions = await this.mainService
          .filterBy({
            id: In(updateRoleDto.permissions),
          })
          .find(Permissions);
        role.permissions = permissions;
      }

      if (updateRoleDto.name) role.name = updateRoleDto.name;
      

      await this.mainService.save(Roles, role);
    } else {
      throw NotFoundException;
    }
    return role;    
  }

  async removeRoles(id: number){
    const removeResult: any = await this.mainService.remove(Roles,id);
    return removeResult;
  }
}
