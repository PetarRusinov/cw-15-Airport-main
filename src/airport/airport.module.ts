import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { flightsProviders } from './airport.provider';
import { FlightsService } from './airport.service';
import { FlightsController } from './airport.controller';

@Module({
  controllers: [FlightsController],
  imports: [DatabaseModule],
  providers: [...flightsProviders, FlightsService],
})
export class FlightsModule {}
