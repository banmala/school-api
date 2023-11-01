import { IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateStudentDto {
	@IsNotEmpty({ message: "First name cannot be empty" })
	first_name: string;

	@IsNotEmpty({ message: "Last name cannot be empty" })
	last_name: string;

	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;

	@IsOptional()
	address?: string;

	@IsOptional()
	phone?: string;
  
	
}