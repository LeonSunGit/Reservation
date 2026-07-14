import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { BookingPage } from "./features/booking/pages/booking-page/booking-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BookingPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reservation-web');
}
