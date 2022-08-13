import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-consumer',
  templateUrl: './view-consumer.component.html',
  styleUrls: ['./view-consumer.component.css']
})
export class ViewConsumerComponent implements OnInit {

  constructor(private apiService: ApiServiceService, public dialogRef: MatDialogRef<ViewConsumerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  consumer!:any;
  meters:any[] = [];
  ngOnInit(): void {
    this.apiService.getConsumer(this.data.consumerId).subscribe((res) => {
      this.consumer = res.data;
      this.apiService.getSmartMetersById(res.data.id).subscribe((res) => {
        this.meters = res.data
      })
    })
    


  }
  getMeter(){

  }
  close() {
    this.dialogRef.close();
  }


}
