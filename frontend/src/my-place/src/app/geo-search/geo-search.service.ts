import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addresses, Address } from '../model/address-model';

@Injectable({
  providedIn: 'root'
})
export class GeoSearchService {

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Addresses>{
    return this.http.get<Addresses>('http://localhost:5000/address');
  }
}
