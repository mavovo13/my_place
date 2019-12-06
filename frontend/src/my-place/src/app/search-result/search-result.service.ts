import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyPlace } from '../model/myplace-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http: HttpClient,) { }

  getMyPlace(post_code: string): Observable<MyPlace>{
    const endpoint = `http://localhost:5000/address/${post_code}/detail`;
    return this.http.get<MyPlace>(endpoint);
  }
}
