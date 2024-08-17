import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../types/LoginRequest';
import { LoginResponse } from '../types/LoginResponse';
import { YearsAndMonths } from '../types/YearsAndMonths';
import { Days } from '../types/Days';
import { BookCategory } from '../types/BookCategory';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  hostUrl = 'http://localhost:9898/lms/';
  
  constructor(private httpClient: HttpClient) { }
  
  loginTheUser(reqPayload : LoginRequest) : Observable<LoginResponse>  {
    return this.httpClient.post<LoginResponse>(this.hostUrl + 'validateUser',reqPayload);
  }

  callTimelineApi() : Observable<YearsAndMonths> {
    return this.httpClient.post<YearsAndMonths>(this.hostUrl + 'yearsAndMonths',null);
  }

  callfetchDaysApi(month: number) : Observable<Days> {
    return this.httpClient.post<Days>(this.hostUrl + `fetchDays?month=${month}`,null);
  }

}
