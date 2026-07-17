import { Component, output, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSlot } from '../../../../shared/models/timeSlot';
import { ReservationModel } from '../../../../shared/models/reservation.model';
import { BookingSlotViewModel } from '../../models/booking-slot.viewmodel';

@Component({
  selector: 'app-time-slot-grid',
  imports: [CommonModule],
  templateUrl: './time-slot-grid.html',
  styleUrl: './time-slot-grid.css',
})
export class TimeSlotGrid {

  timeSlots: TimeSlot[] = [
    { startTime: '06:00', endTime: '07:00' },
    { startTime: '07:00', endTime: '08:00' },
    { startTime: '08:00', endTime: '09:00' },
    { startTime: '09:00', endTime: '10:00' },
    { startTime: '10:00', endTime: '11:00' },
    { startTime: '11:00', endTime: '12:00' },
    { startTime: '12:00', endTime: '13:00' },
    { startTime: '13:00', endTime: '14:00' },
    { startTime: '14:00', endTime: '15:00' },
    { startTime: '15:00', endTime: '16:00' },
    { startTime: '16:00', endTime: '17:00' },
    { startTime: '17:00', endTime: '18:00' },
    { startTime: '18:00', endTime: '19:00' },
    { startTime: '19:00', endTime: '20:00' },
    { startTime: '20:00', endTime: '21:00' },
    { startTime: '21:00', endTime: '22:00' },

  ];
  slotViewModel = input<BookingSlotViewModel[]>([]);
  slotSelected = output<TimeSlot>();

  displaySlots = computed(() => {
    return this.timeSlots.map((slot): BookingSlotViewModel => {
      const viewModel = this.slotViewModel().find(vm => vm.slot.startTime === slot.startTime && vm.slot.endTime === slot.endTime);
      return viewModel ?? { slot: slot, state: 'available' };
    })
  });

  selectSlot(slot: TimeSlot) {
    this.slotSelected.emit(slot);
    console.log(`Selected time slot: ${slot}`);
  }

}
