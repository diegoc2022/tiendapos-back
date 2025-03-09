import { VinculosService } from './vinculos.service';
import { VinculosController } from './vinculos.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinculosEntity } from './entity/vinculos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VinculosEntity])],
    controllers: [
        VinculosController,],
    providers: [
        VinculosService,],
})
export class VinculosModule { }
