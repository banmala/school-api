import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty({"message" : "Role name cannot be empty"})  
    name: string;
}
