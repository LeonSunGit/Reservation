import { Component, computed, signal } from '@angular/core';
import { DateSelector } from '../../components/date-selector/date-selector';
import { TimeSlotGrid } from '../../components/time-slot-grid/time-slot-grid';
import { BookingSummary } from '../../components/booking-summary/booking-summary';
import { ReservationService } from '../../../../core/services/reservation';
import { TimeSlot } from '../../../../shared/models/timeSlot';
import { ReservationModel } from '../../../../shared/models/reservation.model';
import { formatDateOnly } from '../../../../shared/utils/date.util';
import { BookingSlotViewModel } from '../../models/booking-slot.viewmodel';

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
  constructor(public reservationService: ReservationService) {
    this.availableDates = this.reservationService.getAvailableDate(3);
    this.selectedDate.set(this.availableDates[0]);
  }


  selectedSlot = signal<TimeSlot | null>(null);
  selectedDate = signal<Date>(new Date());
  availableDates: Date[] = [];

  filteredReservations = computed(() => {
    return this.reservationService.getReservationsByDateAndGroup(this.selectedDate(), 'default');
  });

  slotViewModels = computed(() => {
    return this.generateSlotViewModels();
  });
  generateSlotViewModels(): BookingSlotViewModel[] {
    const viewModels = this.filteredReservations().map(r => {
      const slot: TimeSlot = {
        startTime: r.startTime,
        endTime: r.endTime
      }
      const viewModel: BookingSlotViewModel = {
        slot: slot,
        state: r.userId === 'user123' ? 'booked-by-me' : 'booked-by-other'
      }
      return viewModel;
    })
    if (this.selectedSlot() && !viewModels.some(vm => vm.slot.startTime === this.selectedSlot()?.startTime && vm.slot.endTime === this.selectedSlot()?.endTime)) {
      const selectedSlotViewModel: BookingSlotViewModel = {
        slot: this.selectedSlot()!,
        state: 'selected'
      }
      viewModels.push(selectedSlotViewModel);
    }

    return viewModels;
  }


  onSlotSelected(slot: TimeSlot) {
    this.selectedSlot.set(slot);
  }
  onDateSelected(date: Date) {
    this.selectedDate.set(date);
    this.selectedSlot.set(null);
  }
  onConfirmBooking() {
    const selectedSlot = this.selectedSlot();
    if (!selectedSlot || !selectedSlot.startTime || !selectedSlot.endTime)
      return;
    const newReservation: ReservationModel = {
      id: crypto.randomUUID(),
      startTime: selectedSlot.startTime,
      endTime: selectedSlot.endTime,
      date: formatDateOnly(this.selectedDate()),
      userId: 'user123',
      userName: 'John Doe',
      status: 'booked',
      createdAt: new Date().toISOString(),
      accountGroup: 'default'

    };
    this.reservationService.addBooking(newReservation);

    this.selectedSlot.set(null);

  }

}
