import { IsEmail, isEmail, IsInt, isInt, IsString, isString } from "class-validator";

export class userDto{
    @IsString() 
    username: string;
    @IsString()
    password: string;
}