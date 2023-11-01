import { Body, Controller, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminsRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admins')
@UseGuards(JwtAuthGuard)
export class AdminsController {
  constructor(
    private readonly adminsRepository: AdminsRepository,
  ) {}
  
  @Post()
  createAdmins(
    @Body() createAdminDto: CreateAdminDto
  ) {
    return this.adminsRepository.createAdmin(createAdminDto);
  }

  @Patch(':id')
  updateAdmins(
    @Param('id') id: string, 
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminsRepository.updateAdmin(+id, updateAdminDto);
  }

  @Get(':id')
  fetchAdminById(
    @Param('id') id: string 
  ){
    return this.adminsRepository.findAdminById(+id);
  }
}
