import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {
    constructor(private productos:ProductosService){}

    @Get()
    funct_retorna_productos_c(){
        return this.productos.funct_retorna_productos_s();
    }

    @Delete()
    funct_elimina_productos(){
        return this.productos.funct_elimina_productos_s();
    }

    @Post()
    funct_inserta_productos_masivos_c(@Body() data:Array<ProductosDto>){  
        try {
            return this.productos.funct_inserta_productos_masivo_s(data);  
        } catch (error) {
            throw new HttpException('Error: No se pudo insertar en la tabla productos', HttpStatus.INTERNAL_SERVER_ERROR);
        }                  
    }

    @Patch('cantidad:id')
    async funct_edita_cantidad_one_c(@Param('id') id:any, @Body() data:ProductosDto){                     
        return await this.productos.funct_edita_cantidad_s(id,data);
    } 

    @Patch('productos/:cod')
    async funct_edita_precios_c(@Param('cod') cod:string, @Body() precio:ProductosDto){          
        return await this.productos.funct_edita_precios_s(cod,precio);
    }    
}
