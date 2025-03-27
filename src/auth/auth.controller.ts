import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { userDto } from './auth.dto';
import { Authservice } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
    constructor( private authservice : Authservice){}
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req:any){
        return this.authservice.payloader(req.user) ; 
    }

    @Post('/signup')
    signup(@Body() rq: userDto){
    {
            return this.authservice.newuser(rq) ; 
    }
}
}