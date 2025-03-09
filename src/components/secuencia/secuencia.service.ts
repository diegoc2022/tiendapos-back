import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdSecuenciaEntity } from './entity/secuencia.entity';
import { Repository } from 'typeorm';
import { IdSecuenciaDto } from './dto/secuencia.dto';

@Injectable()
export class SecuenciaService {
    result: any
    constructor(
        @InjectRepository(IdSecuenciaEntity) 
        private sencuencia: Repository<IdSecuenciaEntity>
    ){}

    getIdSecuencia(){       
       return this.sencuencia.find();
    }

   async functEditaSecuenciaService(data:IdSecuenciaDto){
        console.log("data: ",data);                                
        return await this.sencuencia.update({nombre:data[0].nombre},{id_secuencia:data[0].id_secuencia});    
    } 
}
