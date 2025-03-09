import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from './entity/login.entity';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Token } from 'src/jwt/token';

@Module({
    imports: [TypeOrmModule.forFeature([LoginEntity])],
    controllers: [
        LoginController,],
    providers: [
        LoginService,
        Token
    ],
})
export class LoginModule { }
