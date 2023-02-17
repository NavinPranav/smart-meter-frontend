import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  constructor(
    private apiService: ApiServiceService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SideBarComponent>
  ) {}

  myForm!: any;
  ngOnInit(): void {
    if (this.data.user === 'consumer') {
      this.myForm = this.fb.group({
        username: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(),
      });
    } else if (this.data.user === 'admin') {
        this.myForm = this.fb.group({
          username: new FormControl(),
          password: new FormControl()
        })
    } else if (this.data.user === 'provider') {
      this.myForm = this.fb.group({
        name: new FormControl(),
        rate: new FormControl()
      })
    }
  }

  saveForm() {
    if (this.data.user === 'consumer') {
      this.apiService.addConsumer(this.myForm.value).subscribe(() => {
        this.router.navigate(['consumers']);
        this.dialogRef.close();
      });
    } else if (this.data.user === 'provider') {
      this.apiService.addProvider(this.myForm.value).subscribe(() => {
        this.router.navigate(['providers']);
        this.dialogRef.close();
      })
    } else if (this.data.user === 'admin') {
        this.apiService.addAdmin(this.myForm.value).subscribe((res:any) => {
          this.router.navigate(['admins']);
          this.dialogRef.close();
        })
    }
  }
  cancel() {
    this.dialogRef.close();
  }
}
