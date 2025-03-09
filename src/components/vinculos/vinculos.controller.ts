import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { VinculosService } from './vinculos.service';
import { VinculosDto } from './dto/vinculos.dto';

@Controller('vinculos')
export class VinculosController {
    constructor(private services:VinculosService){}

    @Get(':cod')
    funct_retorna_vinculos_c(@Param('cod') cod:any){
        return this.services.funct_retorna_vinculos_s(cod)
    }

    @Delete()
    funct_elimina_vinculos_c(){
      return  this.services.funct_elimina_vinculos_s()
    }

    @Post()
    funct_inserta_vinculos_masivo_c(@Body() data:Array<VinculosDto>){
      try {
        return this.services.funct_inserta_vinculos_masivos_s(data);
      } catch (error) {
        throw new HttpException('Error: No se pudo insertar en la tabla vinculos: ', HttpStatus.INTERNAL_SERVER_ERROR);
      }      
    }

    @Post('vinc/')
    funct_create_vinculos_c(@Body() createVinculosDto:VinculosDto){               
        return this.services.funct_create_vinculos_s(createVinculosDto);                         
    }
}
