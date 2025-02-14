import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }
  getName(): string {
    return 'My name is John';
  }
  showInfo(): string {
    return 'Hello, I am John Legros, 18 years old';
  }
  getJSON() {
    return {
      name : 'John',
      age : 18,
      hobby : 'football',
    };
  }
}
