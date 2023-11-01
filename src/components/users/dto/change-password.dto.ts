import { IsNotEmpty } from "class-validator";

export class ChangePasswordDto {
	@IsNotEmpty({ message: "New Password cannot be empty" })
	new_password: string;

	@IsNotEmpty({ message: "Old Password cannot be empty" })
	old_password: string;
}
