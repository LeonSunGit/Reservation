import { Component,input,output } from '@angular/core';
import { formatDateOnly } from '../../../../shared/utils/date.util';
import { from } from 'rxjs';


@Component({
  selector: 'app-date-selector',
  imports: [],
  templateUrl: './date-selector.html',
  styleUrl: './date-selector.css',
})
export class DateSelector {
  availableDates=input<Date[]>([]);
  selectedDate=input<Date>(new Date());
  dateSelected=output<Date>();
  

  formateDate= formatDateOnly;
  selectDate(date:Date){
    this.dateSelected.emit(date);
    
  }
}
