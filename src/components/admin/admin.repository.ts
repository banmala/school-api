import { MainRepository } from 'src/main/main.repository';
import { EntityManager, In } from 'typeorm';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admins } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Users } from '../users/entities/user.entity';
import { Roles } from '../roles/entities/role.entity';

export class AdminsRepository extends MainRepository{
  
  async createAdmin(createAdminDto: CreateAdminDto) {
    const execute = async (runner: EntityManager) => {
      let user = new Users();
      user = {...user, ...createAdminDto};
      user.password = "password";
      const newAdminRole = await this.mainService
        .filterBy({
          name: 'admin',
        })
        .findOne(Roles);
      if(newAdminRole){
        user.role = newAdminRole;
      }
      // const newUser = await runner.save(Users, user);
      
      let newAdmin = new Admins();
      newAdmin.user = user;
      
      const adminResp : Admins = await runner.save(Admins, newAdmin);
      return adminResp;
    }
    return  await this.mainService.runTransaction(execute);
  }

  async updateAdmin(adminId:number, updateAdminDto:UpdateAdminDto){
    const execute = async (runner: EntityManager) => {
      let updateAdmin:Admins = await this.mainService.filterBy({id:adminId}).relationBy({user:true}).findOne(Admins);
      updateAdmin.user = {
        ...updateAdmin.user,
        ...updateAdminDto
      }
      // const newUser = await runner.save(Users, user);
      
      
      const adminResp : Admins = await runner.save(Admins, updateAdmin);
      return adminResp;
    }
    return  await this.mainService.runTransaction(execute);
    // const execute = async (runner: EntityManager) => {
    //   let updateAdmin = await this.mainService.filterBy({id: adminId}).relationBy({space: true}).findOne(Admins);
    //   updateAdmin = {...updateAdmin, ...updateAdminDto};
    //   const  updateAdminResponse:Admins = await runner.save(Admins, updateAdmin);
    //   return updateAdminResponse;
    // };
    // return  await this.mainService.runTransaction(execute);
  }

  async findAdminById(
    adminId: number
  ): Promise<Admins | undefined | null> {
    return await this.mainService
    .filterBy(
      {id: adminId}
    )
    .findOne(Admins);
  }
}