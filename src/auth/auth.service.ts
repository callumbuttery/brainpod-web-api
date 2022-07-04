import { Injectable } from '@nestjs/common';
import { auth } from './entities/user.entity';

@Injectable()
export class AuthService {
  register(email: string, password: string): auth {
    const user = new auth();
    user.email = email;
    user.password = password;
    return user;
  }
}
  