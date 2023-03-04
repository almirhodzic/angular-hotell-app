import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings: Booking[] = [
      {
          id: 1,
          name: "Almir Hodzic",
          roomnumber: 100,
          startDate: new Date("2023-03-01"),
          endDate: new Date()
      },
      {
          id: 2,
          name: "Thomass Anders",
          roomnumber: 99,
          startDate: new Date("2023-03-01"),
          endDate: new Date("2023-03-12")
      },
      {
          id: 3,
          name: "Mischa Kowalski",
          roomnumber: 85,
          startDate: new Date("2023-03-01"),
          endDate: new Date("2023-03-06")
      },
      {
          id: 4,
          name: "Sandro Bucher",
          roomnumber: 45,
          startDate: new Date("2023-03-01"),
          endDate: new Date("2023-03-10")
      }
    ]
    return {bookings};
  }
  constructor() { }
}
