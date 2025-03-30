import { IsEmail, IsInt,  IsString} from "class-validator";

export class bodyDto{   
        @IsString()
        task: string;
}