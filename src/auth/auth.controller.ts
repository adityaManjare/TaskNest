import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { Authservice } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { signupDto } from './signup.dto';
import { loginDto } from './login.dto';
import { user } from 'src/entities/user.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('authorization and authentication')
@Controller()
export class AuthController {
    constructor( private authservice : Authservice){}
    @UseGuards(AuthGuard('local'))
    @ApiCreatedResponse({
        description: 'returns the access token and user id'
       
    })
    @Post('/login')
    async login(@Body() req:loginDto){
        return this.authservice.payloader(user) ; //ye user ko maine local strategy se uthaya hai
        
    }
    @ApiCreatedResponse({
        description: 'returns the user if the user is created',
        type: user
    })
    @Post('/signup')
    signup(@Body() rq: signupDto)
    {
            return this.authservice.newuser(rq) ; 
    }
    

     
}