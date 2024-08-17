import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  
  hostUrl = 'http://localhost:9797/banky/customer/';

  constructor(private httpClient : HttpClient) { }

  fetchCustomerSalutations() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'salutations');
  }

  fetchNomineeRelations() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'nomineeRelations');
  }

  fetchIdProofTypes() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'idProofTypes');
  }

  fetchMarritalStatuses() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'marritalStatuses');
  }

  fetchOccupations() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'occupations');
  }

  fetchReligions() : Observable<string[]> {
    return this.httpClient.get<string[]>(this.hostUrl + 'religions');
  }
  
}
