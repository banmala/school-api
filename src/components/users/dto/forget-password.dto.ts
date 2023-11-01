import { IsEmail, IsNotEmpty } from "class-validator";

export class ForgetPasswordDto {
	@IsNotEmpty({ message: "Email cannot be empty" })
	@IsEmail()
	email: string;
}
