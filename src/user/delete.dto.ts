import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt,  IsString} from "class-validator";

export class deleteDto{ 
        @ApiProperty({
            description: 'The task id of the user you want to delete',
            example: 1
        })
        @IsInt()
        taskId: string;
}