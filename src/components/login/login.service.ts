import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from 'src/jwt/token';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { LoginEntity } from './entity/login.entity';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(LoginEntity)
        private repository:Repository<LoginEntity>,
        private jwtService:Token,  
    ){}

    async funct_valida_usuarios_s(loginDto:LoginDto){                       
        const data =  await this.repository.findOne({
            where:{ 
            user:loginDto.user,
            clave:loginDto.clave
            }
        })           

        if (!data) {
            return { status: 401, message: 'Credenciales incorrectas' };
        }  
        const toke =  this.jwtService.func_retorna_token(data);
        return { status:200, result:data, token: toke};                
    }       
}
