import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  jwttoken: HttpHeaders = new HttpHeaders({
    Authorization: localStorage.getItem('jwttoken') + '',
  });

  constructor( private http: HttpClient) {
   }

  

  public adminLogin(admin: any) : Observable<any> {
    return this.http.post<any>('http://localhost:8080/admin/login/', admin, {
      observe: 'response',
    })
  }

  public getProviders(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/admin/get-all/providers')
  } 

  public getSmartMeters(): Observable<any> {
    return this.http.get<any> ('http://localhost:8080/smart-meter/get-all')
  }

  public changeProviderStatus(providerName: string, providerStatus:any): Observable<any> {
    return this.http.put<any> ('http://localhost:8080/admin/provider/' + providerName, providerStatus)
  }
  public addAdmin(adminData:any):Observable<any> {
    return this.http.post<any> ('http://localhost:8080/admin/add-admin/', adminData, {headers: this.jwttoken})
  }

  public addProvider(providerData:any): Observable<any> {
    return this.http.post<any> ('http://localhost:8080/admin/add-provider/', providerData, {headers: this.jwttoken})
  }

  public addConsumer(consumerData:any): Observable<any> {
    return this.http.post<any> ('http://localhost:8080/consumer/create/', consumerData, {headers: this.jwttoken})
  }

  public consumerLogin(consumerData: any):Observable<any> {
    return this.http.post<any> ('http://localhost:8080/consumer/login/', consumerData, {
      observe: 'response',
    })
  }

  public getAllConsumer():Observable<any> {
    return this.http.get<any> ('http://localhost:8080/consumer/get-all')
  }

  public smartMeterInstall(smartMeterDetail:any): Observable<any> {
    return this.http.post ('http://localhost:8080/smart-meter/install/', smartMeterDetail)
  } 
  public getSmartMeter(smartMeterId: string): Observable<any> {
    return this.http.get('http://localhost:8080/smart-meter/' + smartMeterId)
  }

  public updateSmartMeterStatus(meterId:string, status: any): Observable<any> {
    return this.http.put('http://localhost:8080/smart-meter/update_status/' + meterId, status)
  }
  public changeProvider(meterId: string, provider: any): Observable<any> {
    return this.http.put('http://localhost:8080/smart-meter/change_provider/' + meterId, provider)
  }

  public getConsumer(id:any):Observable<any> {
    return this.http.get('http://localhost:8080/consumer/' + id);
  }

  public getSmartMetersById(consumerId:any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/smart-meter/get-smart-meters/' + consumerId)
  }

  public getAllAdmins(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/admin/get-all/admins', {headers: this.jwttoken})
  }

  public recordReading(meterId: string, readings: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/smart-meter/reading/'+ meterId, readings)
  }

  public calculate(meterId: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/smart-meter/calculate/'+ meterId).pipe(delay(1000))
  }


}
