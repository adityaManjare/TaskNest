import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { userDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Authservice {
    constructor(
        @InjectRepository(user)
        private userRepository : Repository<user>,
        private jwtservice:JwtService ,
    ) {}
    newuser(create:userDto){
        return this.userRepository.save(create);
    }
    showbymail(username : string){
        return this.userRepository.findOne({where:{username}})
    }
    async validateUser(username:string, password:string) {
        const resultUser = await this.showbymail(username);
        if(resultUser&&resultUser.password === password){
                return resultUser;
        }  
        else {
            return null;
        }
    }
    async payloader(user: any){
        const payload ={ username:user.username , id : user.id};
        return{
           access_token : this.jwtservice.sign(payload)
        };
    }

}
