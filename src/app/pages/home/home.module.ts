import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TimeFormComponent } from 'src/app/components/time-form/time-form.component';
import { FormRequiredComponent } from 'src/app/components/validators/form-required/form-required.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, TimeFormComponent, FormRequiredComponent ]
})
export class HomePageModule {}
