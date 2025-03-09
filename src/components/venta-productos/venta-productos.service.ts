import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistraVentasEntity } from './entity/registra_ventas.entity';
import { RegistraVentasDto } from './dto/registra-ventas.dto';

@Injectable()
export class VentaProductosService {
    constructor(
        @InjectRepository(RegistraVentasEntity)
        private repository:Repository<RegistraVentasEntity>
    ){}

    funct_retorna_ventas_s(){
        return this.repository.find(); 
    }

    async funct_registra_ventas_s(data:RegistraVentasDto){       
        const create_v = this.repository.create(data);               
        return await this.repository.save(create_v);   
    }

    async funct_edita_cantidad_s(id:any,data:RegistraVentasDto){                                            
        return this.repository.update({id:id},{cantidad:data.existencia, subtotal:data.subtotal});
    }   

    async funct_elimina_item_ventas_s(id:number){
        return this.repository.delete({id:id});
    }

    async funct_elimina_id_ventas_s(data:any[]){
        return await data.map(resp =>{
            this.repository.delete({id:resp.id});
        })   
    } 

    async funct_close_ventas_s(data:any[]){
        return data.map(resp =>{           
            this.repository.update({id:resp.id},{estado:'cerrado1'});            
        })      
    }

    funt_retorna_ventas_facturas(id:any){
        return this.repository.find({
          where:{
            factura:id
          }
        })     
    }

    async funct_elimina_ventas_temporal(){
        return await this.repository.delete({}); 
    }
}
