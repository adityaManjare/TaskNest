import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isEmail, IsInt, isInt, IsString, isString } from "class-validator";

export class loginDto{
    @ApiProperty({
        description: 'The username of the user',
        example: 'aditya'
    })
    @IsString() 
    username: string;
    @ApiProperty({
        description: 'The password of the user',
        example: '1'
    })
    @IsString()
    password: string;
}