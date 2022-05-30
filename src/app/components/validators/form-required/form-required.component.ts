import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-required',
  templateUrl: './form-required.component.html',
  styleUrls: ['./form-required.component.scss'],
})
export class FormRequiredComponent implements OnInit {
  @Input() field: string;
  @Input() isSubmitted: Boolean;
  @Input() errorControl;

  constructor() { }

  ngOnInit() {}

}
