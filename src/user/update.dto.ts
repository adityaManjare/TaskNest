import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt,  IsString} from "class-validator";

export class updateDto{   
    @ApiProperty({
        description: 'The task id of the user you want to update',
        example: '1'
    })
    @IsInt()
    taskId: number;   
    @ApiProperty({
        description: 'The updated task',
        example: 'git commit bhi to sucide hi hai'
    })
    @IsString()
    task: string;
}