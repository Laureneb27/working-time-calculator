import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';
import { TimeElementClass } from 'src/app/shared/models/time/time-element-class.model';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss'],
})
export class TimeFormComponent implements OnInit {

  public timeForm:FormGroup;
  public isSubmitted:Boolean = false;
  private timeList: Array<TimeElementClass> = this.storage.getObject('time') || [];
  //TODO : set dynamic days and traduction
  public dayTypes = [
    {
      id:0,
      value:'Travail'
    },
    {
      id:1,
      value:'CP'
    }
  ];
  public selectedType: number = 0;

  constructor(public storage: StorageService, public formBuilder: FormBuilder, private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.timeForm = this.formBuilder.group({
      date:new FormControl(new Date().toISOString().substring(0,10), [Validators.required]),
      selectedType:new FormControl(0, [Validators.required]),
      arrivingTime:new FormControl('', [Validators.required]),
      leavingTime:new FormControl('', [Validators.required]),
      pausedTime:new FormControl('', [Validators.required])
    });
  }

  get errorControl() {
    return this.timeForm.controls;
  }

  async onSaveTimeForm(){
    this.isSubmitted = true;
    if (this.timeForm.valid) {
      this.timeList.push(this.getTimeElementFromFormGroup());
      await this.storage.setObject('time', this.timeList);
      this.modalCtrl.dismiss()
    }
  }

  getTimeElementFromFormGroup() : TimeElementClass {
    return new TimeElementClass(
      this.timeForm.get('date').value, 
      this.timeForm.get('selectedType').value, 
      this.timeForm.get('arrivingTime').value, 
      this.timeForm.get('leavingTime').value, 
      this.timeForm.get('pausedTime').value
    )
  }
}
