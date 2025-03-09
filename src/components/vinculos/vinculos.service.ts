import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VinculosEntity } from './entity/vinculos.entity';
import { Repository } from 'typeorm';
import { VinculosDto } from './dto/vinculos.dto';

@Injectable()
export class VinculosService {
    total_lotes_insertados:number =0;
    constructor(
        @InjectRepository(VinculosEntity)
        private repository:Repository<VinculosEntity>
    ){}

   async funct_retorna_vinculos_s(data:any){
        const result = await this.repository.find({            
            where:{
                codigoInicial:data.toUpperCase(),
           },
            relations:['producto']
        }) 
        
        if (result.length > 0) {
            return result;
        }else{
            return{
                "code":201,
                "msg":"El producto que intenta vender no existe o no se encuentra asociado"
            }
        }

    }

    async funct_elimina_vinculos_s(){
        return await this.repository.delete({});
    }

    async funct_inserta_vinculos_masivos_s(data:Array<VinculosDto>){
        try {
            const batchSize = 1000;        
            for (let i = 0; i < data.length; i += batchSize) {
                this.total_lotes_insertados++;
                const batch = data.slice(i, i + batchSize);
                await this.repository.insert(batch);
            }
            return this.total_lotes_insertados;
        } catch (error) {
             throw new HttpException('Error: No se pudo insertar en la tabla vinculos: ', HttpStatus.INTERNAL_SERVER_ERROR);
        }        
    }

    async funct_create_vinculos_s(data:VinculosDto) {
        console.log("Data: ",data);
                     
        const result = await this.repository.find({            
            where:{
                codigoInicial:data.codigoInicial.toUpperCase(),
                codigoVinculo:data.codigoVinculo.toUpperCase()
           },
            relations:['producto']
        })
        
        if (result.length > 0) {                 
            return{
                "code":409,
                "msg":"Ya existe un registro con esas mismas caracteristicas"
            } 
        }else{            
            return this.repository.save({
                codigoInicial:data.codigoInicial.toUpperCase(),
                codigoVinculo:data.codigoVinculo.toUpperCase()
            });    
        } 
               
    }

}
