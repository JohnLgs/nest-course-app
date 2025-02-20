import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  OrderFunc(): string {
    return 'Hello from Order Service';
  }
}
