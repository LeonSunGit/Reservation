import { effect, Injectable, Service, signal } from '@angular/core';
import { ReservationModel } from '../../shared/models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

constructor() { 
effect(()=>{
    localStorage.setItem(this.storageKey,JSON.stringify(this.reservatrionList()));

});

}

private readonly storageKey='reservations';

public reservatrionList=signal<ReservationModel[]>(
    this.loadFromStorage()
);


private loadFromStorage():ReservationModel[]{
    const data=localStorage.getItem(this.storageKey);
    return data?JSON.parse(data):[];
}

addBooking(reservation:ReservationModel){
    this.reservatrionList.update(items=>[...items,reservation]);
}

cancelBooking(slotID:string){
  this.reservatrionList.update(items=>items.filter(s=>s.id!=slotID));
}


}
