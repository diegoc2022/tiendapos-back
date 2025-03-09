import { SecuenciaModule } from './components/secuencia/secuencia.module';
import { VentaProductosModule } from './components/venta-productos/venta-productos.module';
import { VinculosModule } from './components/vinculos/vinculos.module';
import { LoginModule } from './components/login/login.module';
import { ProductosModule } from './components/productos/productos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    SecuenciaModule,
    VentaProductosModule,
    VinculosModule,
    LoginModule,
    ProductosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dacs448aj',
      database: 'tiendapos_vm',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    //TypeOrmModule.forFeature([ProductosEntity]),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
  constructor(private dataSouce: DataSource) { }
}
