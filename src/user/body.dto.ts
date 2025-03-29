import { IsEmail, IsInt,  IsString} from "class-validator";

export class bodyDto{
        @IsInt()
        id : number;   
        @IsString()
        task: string;
}