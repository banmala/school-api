import { Module } from '@nestjs/common';
import { StudentsController } from './student.controller';
import { StudentsRepository } from './student.repository';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Student]),
    // forwardRef(() => StudentProfileModule),
  ],
  exports: [StudentsRepository],
  providers: [StudentsRepository],
  controllers: [StudentsController],
})
export class StudentsModule {}
