import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CreateFormComponent } from 'src/app/shared/create-form/create-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private apiService:ApiServiceService, private router:Router, public dialog: MatDialog) { }

  admins!:any;

  ngOnInit(): void {
    this.apiService.getAllAdmins().subscribe((res) => {this.admins = res.data})

  }

  addAdmin() {
    this.dialog.open(CreateFormComponent, {
      width: 'auto',
      data: {user: 'admin'},
    });
  }

}
