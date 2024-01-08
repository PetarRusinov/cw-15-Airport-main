import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Flights } from './airport.entity';

@Injectable()
export class FlightsService {
  constructor(
    @Inject('FLIGHT_REPOSITORY')
    private flightsRepository: Repository<Flights>,
  ) {}


  async getAllFlightsByPilot(pilot: string): Promise<Flights[]> {
    return this.flightsRepository.find({ where: { pilot } });
  }

  async getFlight(id: number): Promise<Flights[]> {
    return this.flightsRepository.find({where: { id } });
  }

  createOne(flight) {
    return this.flightsRepository.save(flight);
  }

  async deleteFlight(id) {
    return this.flightsRepository.delete(id);
  }
}
