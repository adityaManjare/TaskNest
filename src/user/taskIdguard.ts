import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { tasks } from "src/entities/tasks.entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskEditGuard implements CanActivate { // can activate khud ka guard banane ke liye
        constructor(
            @InjectRepository(tasks)
            private userRepository: Repository<tasks>
    
        ) { }
    async canActivate(context: ExecutionContext): Promise<boolean> { // executioncontect to get the request 
        const request = context.switchToHttp().getRequest(); // got the request
        const taskId = request.body.taskId;
        const requestedUserId = parseInt(request.params.userId); // Extract user ID from URL 
        const task = await this.userRepository.findOne({where:{taskid:taskId}});
        if  (!task ) {
            throw new ForbiddenException("enter a valid taskid");
        }
        else if((requestedUserId!==1)&&(task.map_id !== requestedUserId)){
            throw new ForbiddenException("enter the taskid belonging to your task");
        }
        return true; 
    }
}

