import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { HomeComponent } from '../../consumers/home/home.component';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  constructor(private fb:FormBuilder, private apiService: ApiServiceService, public dialogRef: MatDialogRef<HomeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  myForm!:any;

  ngOnInit(): void {
    var currentdate = new Date(); 
    var dateTime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() 
    const getTime =  currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
    this.myForm = this.fb.group({
      date: dateTime,
      time: getTime,
      kw: new FormControl()
    });
  }

  recordReading() {
    this.apiService.recordReading(this.data.meterId, this.myForm.value).subscribe(() => {
      this.dialogRef.close();
    })
  }

  cancel() {
    this.dialogRef.close()

  }

  

}
