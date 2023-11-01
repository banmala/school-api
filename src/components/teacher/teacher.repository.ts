import { MainRepository } from 'src/main/main.repository';
import { EntityManager, In } from 'typeorm';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teachers } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Users } from '../users/entities/user.entity';
import { Roles } from '../roles/entities/role.entity';

export class TeachersRepository extends MainRepository{
  
  async createTeacher(createTeacherDto: CreateTeacherDto) {
    const execute = async (runner: EntityManager) => {
      let user = new Users();
      user = {...user, ...createTeacherDto};
      user.password = "password";
      const newTeacherRole = await this.mainService
        .filterBy({
          name: 'teacher',
        })
        .findOne(Roles);
      if(newTeacherRole){
        user.role = newTeacherRole;
      }
      // const newUser = await runner.save(Users, user);
      
      let newTeacher = new Teachers();
      newTeacher.user = user;
      
      const teacherResp : Teachers = await runner.save(Teachers, newTeacher);
      return teacherResp;
    }
    return  await this.mainService.runTransaction(execute);
  }

  async updateTeacher(teacherId:number, updateTeacherDto:UpdateTeacherDto){
    const execute = async (runner: EntityManager) => {
      let updateTeacher:Teachers = await this.mainService.filterBy({id:teacherId}).relationBy({user:true}).findOne(Teachers);
      updateTeacher.user = {
        ...updateTeacher.user,
        ...updateTeacherDto
      }
      // const newUser = await runner.save(Users, user);
      
      
      const teacherResp : Teachers = await runner.save(Teachers, updateTeacher);
      return teacherResp;
    }
    return  await this.mainService.runTransaction(execute);
    // const execute = async (runner: EntityManager) => {
    //   let updateTeacher = await this.mainService.filterBy({id: teacherId}).relationBy({space: true}).findOne(Teachers);
    //   updateTeacher = {...updateTeacher, ...updateTeacherDto};
    //   const  updateTeacherResponse:Teachers = await runner.save(Teachers, updateTeacher);
    //   return updateTeacherResponse;
    // };
    // return  await this.mainService.runTransaction(execute);
  }

  async findTeacherById(
    teacherId: number
  ): Promise<Teachers | undefined | null> {
    return await this.mainService
    .filterBy(
      {id: teacherId}
    )
    .findOne(Teachers);
  }
}