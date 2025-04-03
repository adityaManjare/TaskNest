import { IsEmail, IsInt,  IsString} from "class-validator";

export class updateDto{   
    @IsInt()
    taskId: number;   
    @IsString()
    task: string;
}