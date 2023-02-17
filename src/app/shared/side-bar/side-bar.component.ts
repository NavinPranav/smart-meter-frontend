import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiServiceService,
    private appService: AppServiceService
  ) {}

  isAdmin!: boolean;

  toggle = true;
  status = 'Enable';

  selected!: any;

  smartmeters: any;

  ngOnInit(): void {
    if (localStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
      this.selected = 'Providers';
      this.router.navigate(['providers'], { relativeTo: this.route });
    } else {
      this.isAdmin = false;
      this.selected = 'Home';
      this.router.navigate(['consumer'], { relativeTo: this.route });
    }
    this.apiService.getSmartMeters().subscribe((res: any) => {
      this.smartmeters = res.data.filter((data: any) => {
        return data.status === 'NEWLY_ADDED';
      }).length;
    });
  }

  smartMeter() {
    this.router.navigate(['smart-meter'], { relativeTo: this.route });
  }

  consumerHome() {
    this.router.navigate(['consumer'], { relativeTo: this.route });
  }

  newSmartMeter() {
    this.router.navigate(['new-smart-meter'], { relativeTo: this.route });
    this.appService.currentCount.subscribe((res) => {
      if (res !== '') {
        this.smartmeters = res;
      }
    });
  }
  providers() {
    this.router.navigate(['providers'], { relativeTo: this.route });
  }
  consumers() {
    this.router.navigate(['consumers'], { relativeTo: this.route });
  }

  admin() {
    this.router.navigate(['admins'], { relativeTo: this.route });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  smartMeterReading() {
    this.router.navigate(['smart-meter/readings'], { relativeTo: this.route });
  }

  adminUser(): Boolean {
    if (localStorage.getItem('admin') === 'true') {
      return true;
    }
    return false;
  }

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
}
