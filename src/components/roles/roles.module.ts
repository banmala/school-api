import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesRepository } from './roles.repository';

@Module({
  controllers: [RolesController],
  providers: [RolesRepository],
})
export class RolesModule {}
