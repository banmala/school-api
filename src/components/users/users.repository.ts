import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { MainRepository } from 'src/main/main.repository';
import { EntityManager, In } from 'typeorm';
import { Roles } from '../roles/entities/role.entity';
import { ActivityType, UserActivity } from '../user_activity/entities/user_activity.entity';
import { AssignRolesDto } from './dto/assign-roles.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

export class UsersRepository extends MainRepository{
  async getUserRoles(id: any) {
    const userRoles = await this.mainService
      .filterBy({ id: id })
      .findOne(Users);
    return userRoles;
  }

  async assignRoles(id: number, assignRolesDto: AssignRolesDto) {
    const user = await this.mainService
      .filterBy({ id: id })
      .findOne(Users);
    if (user) {
      const roles = await this.mainService
        .filterBy({ id: In(assignRolesDto.roles) })
        .find(Roles);
      user.roles = roles;
      return await this.mainService.save(Users, user);
    } else {
      throw new NotFoundException('User not found');
    }
  }

  async updateUser(userId:number, updateUserDto:UpdateUserDto){
    const execute = async (runner: EntityManager) => {
      const updateUser = await this.mainService.filterBy({id: userId}).relationBy({space: true}).findOne(Users);
      updateUser.email = updateUserDto.email;
      const updateUserResponse:Users = await runner.save(Users, updateUser);
      if(updateUserResponse){
        const activityData = {
          type: ActivityType.REGISTER,
          timestamp: new Date(),
          user: updateUserResponse,
          metadata: { description: 'Update user information.' },
        };
        await runner.save(UserActivity, activityData);

        return updateUserResponse;
      }
    };
    return  await this.mainService.runTransaction(execute);
  }

  async currentUser(data: any) {
    const user = await this.mainService.filterBy({id: data.user.id}).relationBy({space: true}).findOne(Users);
    return this.currentUser;
  }

  async findUser(
    data: number | any,
    nonProtectedSelection?: boolean | null,
  ): Promise<Users | undefined | null> {
    const result =  await this.mainService
      .filterBy(
        data
      )
      .selectBy(
        nonProtectedSelection
          ? ['id', 'email', 'password', 'created_at', 'updated_at']
          : []
      )
      .findOne(Users);
    console.log("result: ", result)
    return result;
  }

  async create(data: any) {
    const execute = async (runner: EntityManager) => {
      const newUser = new Users();
      newUser.email = data.email;
      newUser.password = data.password;
      const newUserRole = await this.mainService
        .filterBy({
          name: 'Space Admin',
        })
        .findOne(Roles);
      if (newUserRole) {
        newUser.role = newUserRole;
      }
      const userResp : any = await runner.save(Users, newUser);
      if (userResp) {
        const activityData = {
          type: ActivityType.REGISTER,
          timestamp: new Date(),
          user: userResp,
          metadata: { description: 'Register as new user' },
        };
        await runner.save(UserActivity, activityData);
      }
      return userResp;
    };
    const response = await this.mainService.runTransaction(execute);
    return await this.mainService.filterBy({id: response.id}).relationBy({space: true, roles: true}).findOne(Users);
  }

  async changeForgotPassword(email: string, password: string) {
    const user = await this.mainService
      .filterBy({ email: email })
      .findOne(Users);

    if (user) {
      user.password = password;
      return await this.mainService.save(Users, user);
    }
  }

  async changePassword(id: number, changePasswordDto : ChangePasswordDto) {
    const user = await this.findUser({ id: id }, true);
    if (user && user.password) {
      if(await bcrypt.compare(changePasswordDto.old_password, user.password)){
        const new_password =  await bcrypt.hash(changePasswordDto.new_password, 10);
        user.password = new_password;
        const updateUserResponse = await this.mainService.save(Users, user);
        const {password, ...result} = updateUserResponse;
        return result.id;
      }else{
        throw new HttpException('Old Password did not match.', HttpStatus.FORBIDDEN);
      }
    }else{
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }
  }
}
