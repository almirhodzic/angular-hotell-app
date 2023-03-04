import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private HttpClient: HttpClient) { }

  bookingsUrl: string = "/api/bookings";

  getBookings() : Observable<Booking[]> {
    var response = this.HttpClient.get<Booking[]>(this.bookingsUrl);
    return response;
  }

  deleteBooking(booking:Booking) : Observable<Booking> {
    var response = this.HttpClient.delete<Booking>(this.bookingsUrl + "/" + booking.id);
    console.log(response);
    return response;
  }

  getBookingById(id: Number) : Observable<Booking> {
    var response = this.HttpClient.get<Booking>(this.bookingsUrl + "/" + id);
    return response;
  }

  addBooking(booking: Booking) : Observable<Booking> {
    var response = this.HttpClient.post<Booking>(this.bookingsUrl, booking);
    return response;
  }

  updateBooking(booking: Booking) : void {
    //var currentBooking = this.getBookingById(booking.id);
    // currentBooking = booking;
  }
}
