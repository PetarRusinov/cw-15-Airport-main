import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlightsService } from './airport.service';

@Controller('Flights')
export class FlightsController {
  constructor(private readonly FlightsService: FlightsService) {}

  @Get('/pilot/:pilot')
  async getAllFlightsByPilot(@Param('pilot') pilot){
    return await this.FlightsService.getAllFlightsByPilot(pilot);
  }


  @Get(':id')
  async getFlight(@Param('id') id) {
    return await this.FlightsService.getFlight(id);
  }

  @Post()
  addFlight(@Body() Flight) {
    return this.FlightsService.createOne(Flight);
  }

  @Delete(':id')
  deleteFlight(@Param('id') id) {
    return this.FlightsService.deleteFlight(id);
  }
}
