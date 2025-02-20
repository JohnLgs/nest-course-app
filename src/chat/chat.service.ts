import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  ChatFunc(): string {
    return 'Hello from Chat Service';
  }
}
