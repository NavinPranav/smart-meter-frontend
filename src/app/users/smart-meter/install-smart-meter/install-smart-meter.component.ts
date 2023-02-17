import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { HomeComponent } from '../../consumers/home/home.component';

@Component({
  selector: 'app-install-smart-meter',
  templateUrl: './install-smart-meter.component.html',
  styleUrls: ['./install-smart-meter.component.css']
})
export class InstallSmartMeterComponent implements OnInit {

  constructor(private fb:FormBuilder, private apiService: ApiServiceService, public dialogRef: MatDialogRef<HomeComponent>) { }

  myForm:any;
  providers:any;
  username!:string;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      provider: new FormControl(),
      meterId: new FormControl(),
    });
    this.apiService.getProviders().subscribe((res) => {
      this.providers = res;
    })
    this.apiService.getConsumer(localStorage.getItem('consumerId')).subscribe((res) => {
      this.username = res.data.username
    })

  }

  installSmartMeter() {
    this.myForm.value['username'] = this.username;
    this.apiService.smartMeterInstall(this.myForm.value).subscribe(() => {
        this.dialogRef.close();
    })
  }

  cancel() {
    this.dialogRef.close();
  }

}
