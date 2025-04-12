import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt,  IsString} from "class-validator";

export class bodyDto{   
        @ApiProperty({
            description: 'The task of the user',
            example: 'git commit is to nerfed lets commit sucide instead'
        })
        @IsString()
        task: string;
}