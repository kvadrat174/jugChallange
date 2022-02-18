import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JugBody, JugResponse } from './dto/common.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiTags('Water Jug Challenge')
  @ApiBody({ type: JugBody })
  @ApiOkResponse({ status: 201, type: JugResponse })
  @Post('jug')
  solve(
    @Body() jugbody: JugBody
  ) {
    return this.appService.solveProblem(jugbody);
  }
}
