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
  selectedDate=output<Date>();

  formateDate= formatDateOnly;
  selectDate(date:Date){
    this.selectedDate.emit(date);
    
  }
}
