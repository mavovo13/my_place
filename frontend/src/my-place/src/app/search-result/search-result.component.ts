import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class MyPlace {
  address: string;
  displayAddress: string;
  totalPoint: number;
  point1: number; //fix me
  point2: number; //fix me
  point3: number; //fix me

  static create(address: string): MyPlace{
    return {
      address: address,
      displayAddress: "京都市",
      totalPoint: 0,
      point1: 0,
      point2: 0,
      point3: 0
    }
  }
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  myPlace: MyPlace;
  constructor( private route: ActivatedRoute,) { }

  ngOnInit() {
    this.myPlace = MyPlace.create(this.getAddress())
    console.log(this.myPlace)
  }
  getAddress(): string {
    return this.route.snapshot.paramMap.get('address');
  }

}
