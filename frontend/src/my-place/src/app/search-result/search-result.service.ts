import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/address-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http: HttpClient,) { }

  getAddress(): Observable<Address[]>{
    return this.http.get<Address[]>('http://localhost:5000/address')
  }
}
