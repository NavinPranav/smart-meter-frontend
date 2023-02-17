import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-smart-meters',
  templateUrl: './smart-meters.component.html',
  styleUrls: ['./smart-meters.component.css'],
})
export class SmartMetersComponent implements OnInit {
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private appService: AppServiceService
  ) {}
  smartmeters!: any;
  isNewMeter!: boolean;

  ngOnInit(): void {
    this.apiService.getSmartMeters().subscribe((smartMeters) => {
        this.filterSmartMeter(smartMeters);
    });
  }

  filterSmartMeter(smartMeters:any) {

    const routerLinkArray = this.router.url.split('/');
    if (routerLinkArray[routerLinkArray.length - 1] === 'smart-meter') {
      this.isNewMeter = false;
      this.smartmeters = smartMeters.data;
    } else if (
      routerLinkArray[routerLinkArray.length - 1] === 'new-smart-meter'
    ) {
      this.isNewMeter = true;
      this.smartmeters = smartMeters.data.filter((data: any) => {
        return data.status === 'NEWLY_ADDED';
      });
    }

  }

  action(meterId: string, action: any) {
    let data = { status: action, newMeter: this.isNewMeter };
    this.apiService.updateSmartMeterStatus(meterId, data).subscribe((res) => {
      this.filterSmartMeter(res.data);
      const routerLinkArray = this.router.url.split('/');
      if (routerLinkArray[routerLinkArray.length - 1] === 'new-smart-meter') {
        this.apiService.getSmartMeters().subscribe((res: any) => {
          const meterCount = res.data.filter((data: any) => {
            return data.status === 'NEWLY_ADDED';
          }).length;

          this.appService.changeCount(meterCount);
          
        });
      }
    });
  }
}
