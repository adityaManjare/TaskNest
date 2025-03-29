import { Body, Controller, Post } from '@nestjs/common';
import { userService } from './user.service';
import { bodyDto } from './body.dto';

@Controller()
export class UserController {
    constructor(
        private userService : userService,
    ){}
    @Post('/create')
    create(@Body() bodyDto : bodyDto ){
        return this.userService.create(bodyDto)
    }
}
