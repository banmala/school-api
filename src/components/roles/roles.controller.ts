import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put, Query } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.input.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Request } from 'express';
import { RolesRepository } from './roles.repository';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RolesController {
  constructor(
    private readonly rolesRepository: RolesRepository,
  ) {}

  // @Post()
  // create(@Req() req: Request, @Body() createRoleDto: CreateRoleDto) {
  //   return this.rolesRepository.saveRoles(createRoleDto, req.user);
  // }

  // @Get()
  // findAll(@Req() req: Request, @Query('asFeature') asFeature: Boolean) {
  //   return this.rolesRepository.getAllRoles(req.user, asFeature);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  //   return await this.rolesRepository.updateRoles(+id, updateRoleDto);
  // }
}
