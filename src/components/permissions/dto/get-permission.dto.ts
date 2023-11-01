import { IsNotEmpty } from "class-validator";

export class GetPermissionDto {
    @IsNotEmpty({"message" : "Permission id cannot be empty"})  
    id: number;

    @IsNotEmpty({"message" : "Permission name cannot be empty"}) 
    name: string;

    description: string;
    
    @IsNotEmpty({"message" : "Created date cannot be empty"}) 
    created_at?:  Date;

    @IsNotEmpty({"message" : "Updated date cannot be empty"}) 
    updated_at?:  Date;
}
