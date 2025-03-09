import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosEntity } from './entity/productos.entity';
import { Repository } from 'typeorm';
import { ProductosDto } from './dto/productos.dto';

@Injectable()
export class ProductosService {
  total_lotes_insertados:number =0;
  constructor(
        @InjectRepository(ProductosEntity)
        private repository:Repository<ProductosEntity>
    ){}

  funct_retorna_productos_s(){
    return this.repository.find();
  }

  async funct_elimina_productos_s(){
    return await this.repository.delete({});
  }

  async funct_inserta_productos_masivo_s(data:Array<ProductosDto>){
    try {
      const batchSize = 1000; 
      for (let i = 0; i < data.length; i += batchSize) {
        this.total_lotes_insertados++;
        const batch = data.slice(i, i + batchSize);
        await this.repository.insert(batch);
      }
      return this.total_lotes_insertados
    } catch (error) {
      throw new HttpException('Error: No se pudo insertar en la tabla productos', HttpStatus.INTERNAL_SERVER_ERROR);
    }    
  }

  async funct_edita_cantidad_s(id:any,data:ProductosDto){                                            
    return this.repository.update({codProd:id},{existencia:data.existencia});
  }

  async funct_edita_precios_s(id:string,precio:ProductosDto){                        
    return this.repository.update({codProd:id},precio);
  }
}