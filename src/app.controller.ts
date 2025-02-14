import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showName') // link localhost:3000/showName
  showName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation') // link localhost:3000/showinformation
  showInfo(): string {
    return this.appService.showInfo();
  }

  @Get('/JSON') // link localhost:3000/JSON
  getJSON() {
    return this.appService.getJSON();
  }

  @Get('/GitANDGitHub')
  gitandgithub() {
    return this.appService.gitandgithub();
  }
}
