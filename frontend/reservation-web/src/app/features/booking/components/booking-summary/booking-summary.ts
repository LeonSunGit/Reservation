import { Component,input, output } from '@angular/core';
import { TimeSlot } from '../../../../shared/models/timeSlot';
import { ReservationModel } from '../../../../shared/models/reservation.model';

@Component({
  selector: 'app-booking-summary',
  imports: [],
  templateUrl: './booking-summary.html',
  styleUrl: './booking-summary.css',
})
export class BookingSummary {
 timeslot=input<TimeSlot|null>(null);
 reservations=input<ReservationModel[]>([]);
 bookingConfirm=output<void>();

 confirmBooking(){
  this.bookingConfirm.emit();
 }
}
