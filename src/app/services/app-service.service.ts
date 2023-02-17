import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private countSource = new BehaviorSubject('');
  currentCount = this.countSource.asObservable();

  constructor() { }

  changeCount(count: any) {
    this.countSource.next(count)
  }
}
