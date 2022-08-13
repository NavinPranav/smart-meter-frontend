import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConsumersComponent } from './list-consumers/list-consumers.component';
import { ViewConsumerComponent } from './view-consumer/view-consumer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListConsumersComponent,
    ViewConsumerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
  ]
})
export class ConsumersModule { }
