import { Component } from '@angular/core';
import {DateSelector} from '../../components/date-selector/date-selector';
import {TimeSlotGrid} from '../../components/time-slot-grid/time-slot-grid';
import {BookingSummary} from '../../components/booking-summary/booking-summary';
import { ReservationService } from '../../../../core/services/reservation';
import { TimeSlot } from '../../../../shared/models/timeSlot';
import { ReservationModel } from '../../../../shared/models/reservation.model';

@Component({
  selector: 'app-booking-page',
  imports: [
    DateSelector,
    TimeSlotGrid,
    BookingSummary
  ],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.css',
})
export class BookingPage {
  constructor(public reservationService: ReservationService) {}


selectedSlot:TimeSlot|null=null;


  onSlotSelected(slot:TimeSlot){
     this.selectedSlot=slot;
  }

  onConfirmBooking(){

    if(!this.selectedSlot)
      return;
    const newReservation:ReservationModel  = {
      id:crypto.randomUUID(),
      startTime:this.selectedSlot.startTime,
      endTime:this.selectedSlot.endTime,
      date:new Date().toISOString().split('T')[0],
      userId:'user123',
      userName:'John Doe',
      status:'booked',
      createdAt:new Date().toISOString()

    };
    this.reservationService.addBooking(newReservation);

    this.selectedSlot=null;

  }

}
