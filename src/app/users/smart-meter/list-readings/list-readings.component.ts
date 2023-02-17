import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-list-readings',
  templateUrl: './list-readings.component.html',
  styleUrls: ['./list-readings.component.css']
})
export class ListReadingsComponent implements OnInit {

  constructor(private apiService: ApiServiceService, private fb: FormBuilder) { }

  meters:any;

  readings!:any;

  calculatedAmount = 0.0;

  loading = false;


  ngOnInit(): void {
    this.myForm = this.fb.group({
      meterId: new FormControl()
    });
    this.apiService.getConsumer(localStorage.getItem('consumerId')).subscribe((res) => {
      this.meters = res.data.meterId;
    })
  }

  myForm:any;

  findByMeterId() {
    this.apiService.getSmartMeter(this.myForm.value.meterId).subscribe((res) => {
      this.readings = res.data.readings
    })
    this.calculatedAmount = 0.0;
  }

  calculateReading() {
    this.loading = true;
    this.apiService.calculate(this.myForm.value.meterId).subscribe((res:any) => {
      this.calculatedAmount = res.data;
      this.loading = false;
    })
  }
}
