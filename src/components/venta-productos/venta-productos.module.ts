import { VentaProductosService } from './venta-productos.service';
import { VentaProductosController } from './venta-productos.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistraVentasEntity } from './entity/registra_ventas.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RegistraVentasEntity])],
    controllers: [
        VentaProductosController,],
    providers: [
        VentaProductosService,],
})
export class VentaProductosModule { }
