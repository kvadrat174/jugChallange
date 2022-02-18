import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JugBody, JugResponse } from './dto/common.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiTags('Water Jug Challenge')
  @ApiOperation({ description: "Resolve water jug challenge in two ways" })
  @ApiBody({ type: JugBody })
  @ApiOkResponse({ status: 201, type: JugResponse, description: "Returns fastest way or two ways if they have the same number of steps" })
  @Post('jug')
  solve(
    @Body() jugbody: JugBody
  ) {
    return this.appService.solveProblem(jugbody);
  }
}
