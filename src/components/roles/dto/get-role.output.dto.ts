import { IsDate, IsNotEmpty } from "class-validator";

export class GetRolesDto {
    @IsNotEmpty({"message" : "Role Name cannot be empty"})  
    name: string;
    
    @IsNotEmpty({"message" : "Id cannot be empty"})
    id: number;

    @IsNotEmpty({"message": "Role type cannot be empty"})
    type: string;

    permissions: [Object];

    @IsDate({"message" : "Invalid Date"})
    created_at: Date;

    @IsDate({"message" : "Invalid Date"})
    updated_at: Date;
    
}
