import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JugBody } from './dto/request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('jug')
  solve(
    @Body() jugbody: JugBody
  ) {
    return this.appService.solveProblem(jugbody);
  }
}
