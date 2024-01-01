import { Body, Controller, Get, Post } from '@nestjs/common';
import {MynefeshService} from "../services/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: MynefeshService) {}

  @Get()
  getHello() {
    return this.appService.findAll();
  }
}
