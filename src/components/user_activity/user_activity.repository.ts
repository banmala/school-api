import { NotFoundException } from '@nestjs/common';
import { UpdateUserActivityDto } from './dto/update-user_activity.dto';
import { UserActivity } from './entities/user_activity.entity';
import { Users } from '../users/entities/user.entity';
import { MainRepository } from 'src/main/main.repository';
export class UserActivityRepository extends MainRepository{
  async create(updateUserActivityDto: UpdateUserActivityDto) {
    return this.mainService.save(UserActivity, updateUserActivityDto);
  }

  async findByUserId(userId: number) {
    return this.mainService
      .filterBy({ user: { id: userId } })
      .find(UserActivity);
  }

  async update(userId: any, updateUserActivityDto: UpdateUserActivityDto) {
    const user = await this.mainService
      .filterBy({ id: userId })
      .findOne(Users);
    if (!user) throw new NotFoundException();
    updateUserActivityDto.user = user;
    this.mainService.save(UserActivity, updateUserActivityDto);
  }
}
