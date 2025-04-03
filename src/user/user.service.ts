import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tasks } from 'src/entities/tasks.entity';
import { Repository } from 'typeorm';
import { bodyDto } from './body.dto';
import { updateDto } from './update.dto';
import { deleteDto } from './delete.dto';

@Injectable()
export class userService {
    constructor(
        @InjectRepository(tasks)
        private userRepository: Repository<tasks>

    ) { }
    create(bodyDto:any){
     const inputDto = new tasks(); 
     inputDto.map_id= bodyDto.id;
     inputDto.task = bodyDto.task;
     inputDto.status = 'to do';


     return this.userRepository.save(inputDto);
    }
    read(userId:number){
        if(userId!==1){
        return this.userRepository.findAndCount({where:{map_id:userId}});}
        else{
            return this.userRepository.findAndCount();
        }
    }
    edit(Dto:updateDto){
        this.userRepository.update(Dto.taskId,{task:Dto.task});
        return  this.userRepository.find({where:{taskid:Dto.taskId}});}

    delete(Dto:deleteDto){
        this.userRepository.delete(Dto.taskId);
        return 'task deleted';
        }    }


