import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewConsumerComponent } from '../view-consumer/view-consumer.component';
import { CreateFormComponent } from 'src/app/shared/create-form/create-form.component';

@Component({
  selector: 'app-list-consumers',
  templateUrl: './list-consumers.component.html',
  styleUrls: ['./list-consumers.component.css']
})
export class ListConsumersComponent implements OnInit {

  constructor(private apiService: ApiServiceService, public dialog: MatDialog) { }

  consumers!:any;

  ngOnInit(): void {
    this.apiService.getAllConsumer().subscribe((res) => this.consumers = res.data)
  }

  viewConsumer(id:string) {
    this.dialog.open(ViewConsumerComponent, {
      width: 'auto',
      data: {consumerId: id},
    });
   
  }

  addConsumer() {
    this.dialog.open(CreateFormComponent, {
      width: 'auto',
      data: {user: 'consumer'}
    })
  }

}
