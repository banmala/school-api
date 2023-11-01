import { Body, Controller, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { AssignRolesDto } from './dto/assign-roles.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

  @Get('current')
  currentUser(@Body() data: any) {
    return this.usersRepository.currentUser(data);
  }

  @Get(':id/roles')
  getUserRoles(@Param('id') id: string) {
    return this.usersRepository.getUserRoles(+id);
  }

  @Put(':id/assignRoles')
  assignRoles(@Param('id') id: string, @Body() assignRolesDto: AssignRolesDto) {
    return this.usersRepository.assignRoles(+id, assignRolesDto);
  }

  @Patch(':id')
  updateUsers(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersRepository.updateUser(+id, updateUserDto);
  }

  @Patch('change-password/:id')
  changePassword(@Param('id') id: string, @Body() changePasswordDto: ChangePasswordDto) {
    return this.usersRepository.changePassword(+id, changePasswordDto);
  }

}
