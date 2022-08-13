import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ProvidersComponent } from './providers/providers.component';
import { RouterModule } from '@angular/router';
import { SmartMeterModule } from './smart-meter/smart-meter.module';
import { ConsumersModule } from './consumers/consumers.module';




@NgModule({
  declarations: [
    AdminComponent,
    ProvidersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SmartMeterModule,
    ConsumersModule
  ]
})
export class UsersModule { }
