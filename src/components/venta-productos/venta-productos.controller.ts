import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { VentaProductosService } from './venta-productos.service';
import { RegistraVentasDto } from './dto/registra-ventas.dto';

@Controller('ventas')
export class VentaProductosController {
    constructor(private services:VentaProductosService){}

    @Get()
    funct_retorna_ventas_c(){
        return this.services.funct_retorna_ventas_s();
    }

    @Post()
    funct_registra_ventas_c(@Body() data:RegistraVentasDto){
        console.log("Data: ",data);
        
        return  this.services.funct_registra_ventas_s(data);
    }

    @Patch('cantidad/:id')
    async funct_edita_cantidad_c(@Param('id') id:any, @Body() data:RegistraVentasDto){                     
        return await this.services.funct_edita_cantidad_s(id,data);
    }     

    @Delete('item/:id')
    async funct_elimina_item_ventas_c(@Param('id') id:number){    
        return await this.services.funct_elimina_item_ventas_s(id);
    }

    @Delete('vent/')
    async funct_elimina_id_ventas_c(@Body() data:any){    
        this.services.funct_elimina_id_ventas_s(data);   
    }
    
    @Put()
    funct_close_ventas_c(@Body() data:any){      
        return this.services.funct_close_ventas_s(data);     
    }

    @Get('factura/:id')
    funt_retorna_ventas_facturas(@Param('id') id:any){
        return this.services.funt_retorna_ventas_facturas(id)
    }

    @Delete('ventasTemp/')
    funct_elimina_ventas_temporal_c(){
      return  this.services.funct_elimina_ventas_temporal()
    }
    
}
