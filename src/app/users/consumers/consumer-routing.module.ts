import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewConsumerComponent } from './view-consumer/view-consumer.component';

const routes: Routes = [
    {path: 'view-consumer', component: ViewConsumerComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
