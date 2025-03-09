import { Body, Controller, Get, Patch } from '@nestjs/common';
import { IdSecuenciaDto } from './dto/secuencia.dto';
import { SecuenciaService } from './secuencia.service';

@Controller('secuencia')
export class SecuenciaController {
    constructor(
        private secuenciaService:SecuenciaService
    ){}

    @Get()
    getIdSecuencia(){
      return  this.secuenciaService.getIdSecuencia();
    }

    @Patch()
    async functEditaSecuencia(@Body() data:IdSecuenciaDto){         
      return await this.secuenciaService.functEditaSecuenciaService(data);     
    }
}
