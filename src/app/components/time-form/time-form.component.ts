import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TimeElementClass } from 'src/app/shared/models/time/time-element-class.model';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss'],
})
export class TimeFormComponent implements OnInit {

  public name:string;
  private timeList: Array<TimeElementClass> = this.storage.getObject('time');

  constructor(public storage: StorageService) { }

  ngOnInit() {}

  async onSaveTimeForm(){
    this.timeList.push(new TimeElementClass(this.name, '','',''));
    await this.storage.setObject('time', this.timeList);
  }
}
