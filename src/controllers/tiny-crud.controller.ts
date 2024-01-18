import { Controller, Get } from '@nestjs/common';
import { SingletonFactory } from 'tiny-crud';
import { UserRepository } from './user-repository';

@Controller('/tiny-crud')
export class TinyCRUDController {
    
    @Get('/')
    async findAll(): Promise<string> {
        const UserRepo = SingletonFactory.createInstance(UserRepository);
        UserRepo.findByName("张三").then(res=>{
            console.log(res)
        })
        
        return 'This action returns all cats';
    }
}
