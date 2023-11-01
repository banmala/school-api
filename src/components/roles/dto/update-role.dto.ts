import { PartialType } from '@nestjs/mapped-types';
import { IsArray } from 'class-validator';
import { CreateRoleDto } from './create-role.input.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsArray()
    permissions: [number]
}
