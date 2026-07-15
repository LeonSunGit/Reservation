import { effect, Injectable, Service, signal } from '@angular/core';
import { ReservationModel } from '../../shared/models/reservation.model';
import { formatDateOnly } from '../../shared/utils/date.util';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    constructor() {
        effect(() => {
            localStorage.setItem(this.storageKey, JSON.stringify(this.reservatrionList()));

        });

    }

    private readonly storageKey = 'reservations';

    public reservatrionList = signal<ReservationModel[]>(
        this.loadFromStorage()
    );


    private loadFromStorage(): ReservationModel[] {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    addBooking(reservation: ReservationModel) {
        this.reservatrionList.update(items => [...items, reservation]);
    }

    cancelBooking(slotID: string) {
        this.reservatrionList.update(items => items.filter(s => s.id != slotID));
    }
    getReservationsByDate(date:Date):ReservationModel[]{
        console.log('getReservationsByDate', date, formatDateOnly(date));
        return this.reservatrionList().filter(p=>p.date===formatDateOnly(date));
    }

    getAvailableDate(daysAhead = 3): Date[] {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return Array.from({ length: daysAhead }, (_, index) => {
            const d = new Date(today);
            d.setDate(today.getDate() + index);
            return d;
        })
    }

}
