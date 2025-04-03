import { IsEmail, IsInt,  IsString} from "class-validator";

export class deleteDto{   
        @IsInt()
        taskId: string;
}