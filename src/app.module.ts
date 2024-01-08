import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './airport/airport.module';

@Module({
  imports: [FlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
