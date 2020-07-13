import { Injectable } from '@angular/core';
import * as Moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WeekDatesService {
  weekDates = [];
  constructor() { 
    let myDate = Moment();
    let myWeekDay = Moment().isoWeekday();
    while(myWeekDay != 1) {
      myDate = Moment(myDate).subtract(1, 'days');
      myWeekDay = Moment(myDate).isoWeekday();
    }

    let i: number ;
    for(i=0; i<7; i++) {
      let myDate2 = Moment(myDate).add(i, 'days');
      this.weekDates.push(Moment(myDate2).format("ddd DD-MMM-YYYY"));
    }
  }

  GetWeekDates() {
    return this.weekDates;
  }
}
