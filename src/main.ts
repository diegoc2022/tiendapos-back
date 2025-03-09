import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.use(express.json({ limit: '10mb' })); // Ajusta el límite según tus necesidades
  app.use(express.urlencoded({ limit: '10mb', extended: true })); 
  app.enableCors({
    origin: '*', // Permitir cualquier origen, ajusta esto para producción
  }); 
  await app.listen(3000);
}
bootstrap();
