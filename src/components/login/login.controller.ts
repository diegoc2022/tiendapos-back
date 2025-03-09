import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
    constructor(
        private services:LoginService
    ){}   

  @Post('user')
  funct_valida_usuarios_c(@Body() loginDto:LoginDto){    
    return  this.services.funct_valida_usuarios_s(loginDto);       
  }
}
