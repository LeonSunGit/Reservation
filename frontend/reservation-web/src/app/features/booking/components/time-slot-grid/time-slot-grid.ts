import { Component, output,input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSlot } from '../../../../shared/models/timeSlot';
import { ReservationModel } from '../../../../shared/models/reservation.model';

@Component({
  selector: 'app-time-slot-grid',
  imports: [CommonModule],
  templateUrl: './time-slot-grid.html',
  styleUrl: './time-slot-grid.css',
})
export class TimeSlotGrid {

timeSlots: TimeSlot[] = [
  { startTime: '06:00', endTime: '06:30' },
  { startTime: '06:30', endTime: '07:00' },
  { startTime: '07:00', endTime: '07:30' }
];

  selectedSlot = output<TimeSlot>();
  reservations =input<ReservationModel[]>([]);

  selectSlot(slot: TimeSlot) {
    this.selectedSlot.emit(slot);
    console.log(`Selected time slot: ${slot}`);
  }

  isBooked(slot: TimeSlot):boolean{
    return this.reservations().some(reservation => reservation.startTime=== slot.startTime && reservation.endTime === slot.endTime);
  }

}
