import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teachers as Teacher } from './entities/teacher.entity';
import { TeachersController } from './teacher.controller';
import { TeachersRepository } from './teacher.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Teacher]),
    // forwardRef(() => TeacherProfileModule),
    UsersModule
  ],
  exports: [TeachersRepository],
  providers: [TeachersRepository],
  controllers: [TeachersController],
})
export class TeachersModule {}
