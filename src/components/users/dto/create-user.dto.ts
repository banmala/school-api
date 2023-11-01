import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty({ message: "First name cannot be empty" })
	first_name: string;

	@IsNotEmpty({ message: "Last name cannot be empty" })
	last_name: string;

	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;

	@IsNotEmpty({ message: "Password cannot be empty" })
	password: string;
}

export class UserRegisterDto {
	@IsNotEmpty({ message: "First name cannot be empty" })
	first_name: string;

	@IsNotEmpty({ message: "Last name cannot be empty" })
	last_name: string;

	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;
}
