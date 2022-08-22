import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  private dateFormat = 'DD/MM/yyyy';
  public weekNumber:number = moment().week();
  public firstDayWeek:string = moment().startOf('week').format(this.dateFormat);
  public lastDayWeek:string = moment().endOf('week').format(this.dateFormat);
  constructor() { }

  ngOnInit() {
  }

  goToNextWeek(): void {
    this.weekNumber++;
    this.updateWeekDay();
  }

  goToPrevWeek(): void {
    this.weekNumber--;
    this.updateWeekDay();
  }

  updateWeekDay(){
    this.firstDayWeek = moment().week(this.weekNumber).startOf('week').format('DD/MM/yyyy');
    this.lastDayWeek = moment().week(this.weekNumber).endOf('week').format('DD/MM/yyyy');
  }
}

