import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { userService } from './user.service';
import { bodyDto } from './body.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserOwnerGuard } from './useridguard';

@Controller('/:userId')
export class UserController {
    constructor(
        private userService : userService,
    ){}
    @UseGuards(AuthGuard('jwt'),UserOwnerGuard)
    @Post('/create')
    create(@Body() rq: bodyDto,@Param('userId',ParseIntPipe) userId:number ){
        const inputdto = {
            id : userId, // well i dont know how i'll extract user id from jwt / ig one way is in useridguard
            task : rq.task
        }
        return this.userService.create(inputdto);
    }
    @UseGuards(AuthGuard('jwt'),UserOwnerGuard)
    @Get('/read')
    read(@Param('userId',ParseIntPipe) userId:number ){
        return this.userService.read(userId);
    }
}
