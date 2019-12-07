import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyPlacerPoint } from "../model/myplace-model";

// APIを受けるためだけに使うMyPlaceのインタフェースです
interface MyPlaceAPI{
  display_name: string;
  post_code: string;
  points: MyPlacerPoint[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http: HttpClient,) { }

  getMyPlace(post_code: string): Observable<MyPlaceAPI>{
    const endpoint = `http://localhost:5000/address/${post_code}/detail`;
    return this.http.get<MyPlaceAPI>(endpoint);
  }
}
