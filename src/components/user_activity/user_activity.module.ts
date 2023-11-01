import { forwardRef, Module } from '@nestjs/common';
import { UserActivityController } from './user_activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActivity } from './entities/user_activity.entity';
import { UsersModule } from '../users/users.module';
import { UserActivityRepository } from './user_activity.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserActivity]),
    forwardRef(() => UsersModule),
  ],
  controllers: [UserActivityController],
  providers: [UserActivityRepository],
  exports: [TypeOrmModule, UserActivityRepository],
})
export class UserActivityModule {}
