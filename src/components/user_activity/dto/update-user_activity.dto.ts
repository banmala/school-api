import { IsEnum } from "class-validator";
import { GetUserDto } from "src/components/users/dto/get-user.dto";
import { ActivityType } from "../entities/user_activity.entity";

export class UpdateUserActivityDto {
    @IsEnum(ActivityType)
    type: ActivityType;
    timestamp: Date;
    metadata: any;
    user?: GetUserDto;
}
