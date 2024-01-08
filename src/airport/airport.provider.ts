import { DataSource } from 'typeorm';
import { Flights } from './airport.entity';

export const flightsProviders = [
  {
    provide: 'FLIGHT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Flights),
    inject: ['DATA_SOURCE'],
  },
];
