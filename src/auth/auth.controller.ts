import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  async register(@Body() user) {
    const { email, password } = user;
    return this.authService.register(email, password);
  }
}
