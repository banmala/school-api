import { IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateTeacherDto {
	@IsNotEmpty({ message: "First name cannot be empty" })
	first_name: string;

	@IsNotEmpty({ message: "Last name cannot be empty" })
	last_name: string;

	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;	
}