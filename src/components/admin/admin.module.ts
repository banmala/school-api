import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admins as Admin } from './entities/admin.entity';
import { AdminsController } from './admin.controller';
import { AdminsRepository } from './admin.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Admin]),
    // forwardRef(() => AdminProfileModule),
    UsersModule
  ],
  exports: [AdminsRepository],
  providers: [AdminsRepository],
  controllers: [AdminsController],
})
export class AdminsModule {}
