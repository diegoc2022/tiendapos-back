import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ProductosEntity } from './entity/productos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProductosEntity])],
    controllers: [ProductosController],
    providers: [ProductosService]   
})
export class ProductosModule {}
