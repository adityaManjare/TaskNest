import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from '../entities/user.entity';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import { userDto } from './auth.dto';

@Injectable()
export class Authservice {
    constructor(
        @InjectRepository(user)
        private userRepository : Repository<user>,
        private jwtservice:JwtService ,
    ) {}
  async  newuser(create:userDto){
        const resultUser = await this.showbymail(create.username);
        if(resultUser){
                return 'account already exists please login here : http://localhost:3000/login';
        }  
        else {
            return this.userRepository.save(create); 
        }

       
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
