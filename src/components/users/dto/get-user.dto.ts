import { IsNotEmpty, IsEmail, IsDate, IsEmpty } from 'class-validator';

export class GetUserDto {
    @IsNotEmpty({"message" : "Email cannot be empty"})  
    email: string;
    
    @IsNotEmpty({"message" : "Id cannot be empty"})
    id: number;
}