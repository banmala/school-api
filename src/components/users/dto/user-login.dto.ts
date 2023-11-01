import { IsNotEmpty, IsEmail, IsDate, IsEmpty, IsArray, IsObject } from 'class-validator';
import { GetRolesDto } from 'src/components/roles/dto/get-role.output.dto';

export class UserLoginDto {
    @IsNotEmpty({"message" : "Email cannot be empty"})  
    email: string;
    
    @IsNotEmpty({"message" : "Id cannot be empty"})
    id: number;

    @IsDate({"message" : "Invalid Date"})
    created_at: Date;

    @IsDate({"message" : "Invalid Date"})
    updated_at: Date;
    
    @IsArray()
    role: GetRolesDto;

}