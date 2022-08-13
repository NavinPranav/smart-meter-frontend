import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartMetersComponent } from './smart-meters/smart-meters.component';
import { InstallSmartMeterComponent } from './install-smart-meter/install-smart-meter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReadingsComponent } from './readings/readings.component';
import { ListReadingsComponent } from './list-readings/list-readings.component';



@NgModule({
  declarations: [
    SmartMetersComponent,
    InstallSmartMeterComponent,
    ReadingsComponent,
    ListReadingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

  ]
})
export class SmartMeterModule { }
