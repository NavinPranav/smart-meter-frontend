import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CreateFormComponent } from 'src/app/shared/create-form/create-form.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  constructor(private apiService:ApiServiceService,  public dialog: MatDialog) { }

  providers!:any; 

  ngOnInit(): void {
    this.apiService.getProviders().subscribe((res) => {
      this.providers = res.data;
    })
  }

  addProvider() {
    this.dialog.open(CreateFormComponent, {
      width: 'auto',
      data: {user: 'provider'}
    })
  }

  changeProviderStatus(providerName:string, status: boolean) {

    this.apiService.changeProviderStatus(providerName, {'active': status}).subscribe((res) => {
      console.log(res)
    })
  }



}
