import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService, Statements } from './services';
import type { Request } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly statementService: Statements,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/statements')
  getStatement() {
    return this.statementService.getStatement();
  }

  @Post('/statements')
  addStatement(@Req() requset: Request) {
    return this.statementService.addStatement(requset.body);
  }
}
