import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formbuilder: FormBuilder
    ) {}

  booking : Booking = {
    id: 5,
    name: "Gast Name, Vorname",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  bookingForm: FormGroup = this.formbuilder.group({
    id:['', Validators.required],
    roomNumber:['', Validators.required],
    name:['', Validators.compose([Validators.required, Validators.minLength(8)])],
    startDate:['', Validators.required],
    endDate:['', Validators.required]
  })

  ngOnInit(): void {
    if(this.router.url != '/createBooking'){
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.bookingService.getBookingById(id).subscribe((result) => {

        this.booking = result;

        this.bookingForm.setValue({
          id: this.booking.id,
          roomNumber: this.booking.roomNumber,
          name: this.booking.name,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate,
        })

      });
      
    }
  }

  save(): void {
    // this.booking = this.bookingForm.value;

    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean){
    var val = (event.target as HTMLInputElement).value;

    if(isStart){
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
