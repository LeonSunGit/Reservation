import { Component } from '@angular/core';
import { ReservationService } from '../../../../core/services/reservation';

@Component({
  selector: 'app-my-reservations-page',
  imports: [],
  templateUrl: './my-reservations-page.html',
  styleUrl: './my-reservations-page.css',
})


export class MyReservationsPage {

constructor(public reservation: ReservationService) {}

}
