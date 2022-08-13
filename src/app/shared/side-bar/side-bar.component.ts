import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  isAdmin!:boolean;



  ngOnInit(): void {
      if(localStorage.getItem('admin')){
          this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
      this.router.navigate(['providers'], {relativeTo:this.route});

  }

  smartMeter() {
    this.router.navigate(['smart-meter'], {relativeTo:this.route})
  }

  consumerHome() {
    this.router.navigate(['consumer'], {relativeTo:this.route})
  }

  newSmartMeter() {
    this.router.navigate(['new-smart-meter'], {relativeTo: this.route})
  }
  providers() {
    this.router.navigate(['providers'], {relativeTo:this.route});
  }
  consumers() {
    this.router.navigate(['consumers'], {relativeTo:this.route});
  }

  admin() {
    this.router.navigate(['admins'], {relativeTo: this.route})
  }

  logOut() {
    localStorage.clear()
    this.router.navigate([''])
    
  }
  smartMeterReading() {
    this.router.navigate(['smart-meter/readings'], {relativeTo: this.route})
  }


}
