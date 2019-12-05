import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addresses } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http: HttpClient,) { }

  getAddress(): Observable<Addresses>{
    return this.http.get<Addresses>('http://localhost:5000/address')
  }
}
