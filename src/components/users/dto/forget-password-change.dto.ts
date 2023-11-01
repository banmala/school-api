import { IsEmail, IsNotEmpty } from "class-validator";

export class ForgetPasswordChangeDto {
	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;

	@IsNotEmpty({ message: "Password cannot be empty" })
	password: string;
}
