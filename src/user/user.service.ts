import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tasks } from 'src/entities/tasks.entity';
import { Repository } from 'typeorm';
import { bodyDto } from './body.dto';

@Injectable()
export class userService {
    constructor(
        @InjectRepository(tasks)
        private userRepository: Repository<tasks>

    ) { }
    create(bodyDto:bodyDto){
     const inputDto = new tasks(); 
     inputDto.map_id= bodyDto.id;
     inputDto.task = bodyDto.task;
     inputDto.status = 'to do';


     return this.userRepository.save(inputDto);
    }
}
