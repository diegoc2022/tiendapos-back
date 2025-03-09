import { SecuenciaService } from './secuencia.service';
import { SecuenciaController } from './secuencia.controller';
import { Module } from '@nestjs/common';
import { IdSecuenciaEntity } from './entity/secuencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([IdSecuenciaEntity])],
    controllers: [
        SecuenciaController,],
    providers: [
        SecuenciaService,],
})
export class SecuenciaModule { }
