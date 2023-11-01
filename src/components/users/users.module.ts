import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users as User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UserActivityModule } from '../user_activity/user_activity.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // forwardRef(() => UserProfileModule),
    // UserActivityModule,
    forwardRef(() => UserActivityModule),
  ],
  exports: [TypeOrmModule, UsersRepository],
  providers: [UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}
