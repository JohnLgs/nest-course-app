import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  UserFunc(): string {
    return 'Hello from User Service';
  }
}
