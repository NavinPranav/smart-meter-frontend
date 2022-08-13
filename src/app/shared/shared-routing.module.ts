import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../users/admin/admin.component';
import { HomeComponent } from '../users/consumers/home/home.component';
import { ListConsumersComponent } from '../users/consumers/list-consumers/list-consumers.component';
import { ProvidersComponent } from '../users/providers/providers.component';
import { ListReadingsComponent } from '../users/smart-meter/list-readings/list-readings.component';
import { SmartMetersComponent } from '../users/smart-meter/smart-meters/smart-meters.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
    {path: 'home', component:SideBarComponent, children:[
        {path: 'providers', component: ProvidersComponent},
        {path: 'smart-meter', component: SmartMetersComponent},
        {path:'new-smart-meter', component: SmartMetersComponent},
        {path: 'consumers', component: ListConsumersComponent},
        {path: 'admins', component: AdminComponent},
        {path: 'consumer', component: HomeComponent},
        {path: 'smart-meter/readings', component: ListReadingsComponent}

    ]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
