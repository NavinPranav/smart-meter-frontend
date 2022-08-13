import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { InstallSmartMeterComponent } from '../../smart-meter/install-smart-meter/install-smart-meter.component';
import { ReadingsComponent } from '../../smart-meter/readings/readings.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiServiceService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }

  consumerDetails!:any;

  edit = false;

  myForm!:any;

  providers!:any;

  smartMeters!:any;
  ngOnInit(): void {
    if(localStorage.getItem('consumerId') !== null) {
      this.apiService.getConsumer(localStorage.getItem('consumerId')).subscribe((res) => {
        this.consumerDetails = res.data
        console.log(res.data.meterId)
      this.apiService.getSmartMetersById(res.data.id).subscribe((meters) => {
        this.smartMeters = meters;
      })

      })
      this.myForm = this.fb.group({
        name: new FormControl()
      });
    }

    this.apiService.getProviders().subscribe((res:any) => {
      this.providers = res
    } )

  }

  switchProvider (meterId:string) {
    console.log(meterId, this.myForm.value)
    this.apiService.changeProvider(meterId, this.myForm.value).subscribe((res:any) => {
      console.log(res)
    })
    
  }

  addSmartMeter() {
    this.dialog.open(InstallSmartMeterComponent, {
     width:'auto'
    })
  }

  recordReadings(meterId: string) {
    this.dialog.open(ReadingsComponent, {
      width: 'auto',
      data: {'meterId': meterId}
    })
  }



}
