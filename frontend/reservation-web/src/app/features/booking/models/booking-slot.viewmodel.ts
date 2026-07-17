import { TimeSlot } from '../../../shared/models/timeSlot';

export type BookingSlotState =
  | 'available'
  | 'selected'
  | 'booked-by-me'
  | 'booked-by-other';

export interface BookingSlotViewModel {
  slot: TimeSlot;
  state: BookingSlotState;
}