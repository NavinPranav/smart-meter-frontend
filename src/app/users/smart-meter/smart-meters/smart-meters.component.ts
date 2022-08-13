import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-smart-meters',
  templateUrl: './smart-meters.component.html',
  styleUrls: ['./smart-meters.component.css']
})
export class SmartMetersComponent implements OnInit {

  constructor(private apiService:ApiServiceService, private router:Router) { }
  smartmeters!:any;
  isNewMeter!:boolean;

  ngOnInit(): void {

    this.apiService.getSmartMeters().subscribe((res) => {
      const routerLinkArray = this.router.url.split('/')
      if(routerLinkArray[routerLinkArray.length -1] === 'smart-meter') {
        this.isNewMeter = false;
        this.smartmeters = res.data;
      } else if (routerLinkArray[routerLinkArray.length -1] === 'new-smart-meter') {
        this.isNewMeter = true;
        this.smartmeters = (res.data).filter((data:any) => {
            return data.status === 'NEWLY_ADDED'
        })
      }
    })
  }

  addSmartMeter() {

  }

  action(meterId:string, action:any) {
    let data = {status: action, newMeter: this.isNewMeter}
    this.apiService.updateSmartMeterStatus(meterId,data).subscribe((res) => {
      console.log(res)
    })    
    
  }

}
