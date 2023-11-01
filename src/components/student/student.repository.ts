import { MainRepository } from 'src/main/main.repository';
import { EntityManager, In } from 'typeorm';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Students } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

export class StudentsRepository extends MainRepository{
  async createStudent(createStudentDto: CreateStudentDto) {
    // const execute = async (runner: EntityManager) => {
    //   let newStudent = new Students();
    //   newStudent = {...newStudent, ...createStudentDto};
    //   const newStudentRole = await this.mainService
    //     .filterBy({
    //       name: 'student',
    //     })
    //     .findOne(Roles);
    //   const studentResp : any = await runner.save(Students, newStudent);
    //   return studentResp;
    const studentResp : Students = await this.mainService.save(Students, createStudentDto);
    return studentResp;
  }

  async updateStudent(studentId:number, updateStudentDto:UpdateStudentDto){
    const execute = async (runner: EntityManager) => {
      let updateStudent = await this.mainService.filterBy({id: studentId}).relationBy({space: true}).findOne(Students);
      updateStudent = {...updateStudent, ...updateStudentDto};
      const  updateStudentResponse:Students = await runner.save(Students, updateStudent);
      return updateStudentResponse;
    };
    return  await this.mainService.runTransaction(execute);
  }

  async findStudentById(
    studentId: number
  ): Promise<Students | undefined | null> {
    return await this.mainService
    .filterBy(
      {id: studentId}
    )
    .findOne(Students);
  }
}