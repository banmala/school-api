import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UserActivityRepository } from './user_activity.repository';

@Controller('user-activity')
@UseGuards(JwtAuthGuard)
export class UserActivityController {
  constructor(
    private readonly userActivityRepository: UserActivityRepository,
  ) {}

  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.userActivityRepository.findByUserId(+userId);
  }
}
