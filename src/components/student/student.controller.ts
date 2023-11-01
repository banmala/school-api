import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsRepository } from './student.repository';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
@UseGuards(JwtAuthGuard)
export class StudentsController {
  constructor(
    private readonly studentsRepository: StudentsRepository,
  ) {}
  
  @Post()
  createStudents(
    @Body() createStudentDto: CreateStudentDto
  ) {
    return this.studentsRepository.createStudent(createStudentDto);
  }

  @Patch(':id')
  updateStudents(
    @Param('id') id: string, 
    @Body() updateStudentDto: UpdateStudentDto
  ) {
    return this.studentsRepository.updateStudent(+id, updateStudentDto);
  }

  @Get(':id')
  fetchStudentById(
    @Param('id') id: string 
  ){
    return this.studentsRepository.findStudentById(+id);
  }
}
