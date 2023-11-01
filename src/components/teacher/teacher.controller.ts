import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeachersRepository } from './teacher.repository';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teachers')
@UseGuards(JwtAuthGuard)
export class TeachersController {
  constructor(
    private readonly teachersRepository: TeachersRepository,
  ) {}
  
  @Post()
  createTeachers(
    @Body() createTeacherDto: CreateTeacherDto
  ) {
    return this.teachersRepository.createTeacher(createTeacherDto);
  }

  @Patch(':id')
  updateTeachers(
    @Param('id') id: string, 
    @Body() updateTeacherDto: UpdateTeacherDto
  ) {
    return this.teachersRepository.updateTeacher(+id, updateTeacherDto);
  }

  @Get(':id')
  fetchTeacherById(
    @Param('id') id: string 
  ){
    return this.teachersRepository.findTeacherById(+id);
  }
}
