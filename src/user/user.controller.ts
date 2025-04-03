import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { userService } from './user.service';
import { bodyDto } from './body.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserOwnerGuard } from './useridguard';
import { updateDto } from './update.dto';
import { TaskEditGuard } from './taskIdguard';
import { deleteDto } from './delete.dto';

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
    @Get('/tasks')
    read(@Param('userId',ParseIntPipe) userId:number ){
        return this.userService.read(userId);
    }
    @UseGuards(AuthGuard('jwt'),UserOwnerGuard,TaskEditGuard)
    @Post('/edit')
    edit(@Body() dto: updateDto ,@Param('userId',ParseIntPipe) userId:number ){
        return this.userService.edit(dto);
    }
    @UseGuards(AuthGuard('jwt'),UserOwnerGuard,TaskEditGuard)
    @Delete('/delete')
    delete(@Body() dto: deleteDto ,@Param('userId',ParseIntPipe) userId:number ){
        return this.userService.delete(dto);
    }
}
