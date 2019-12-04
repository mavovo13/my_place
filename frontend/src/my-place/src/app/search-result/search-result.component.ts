import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';

export class Point{
  name: string;
  point: number;
}

export class MyPlace {
  address: string;
  displayAddress: string;
  points: Point[];

  get totalPoint(): number{
    return this.points
      .map(p=>p.point)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  static create(address: string): MyPlace{
    const ps:Point[]= [{name:"hoge", point:1}, {name:"piyo", point:10}]

    const mp = new MyPlace();
    mp.address = address;
    mp.displayAddress = "京都市";
    mp.points = ps;

    return mp
  }

}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  myPlace: MyPlace;
  constructor( private route: ActivatedRoute, private service: SearchResultService) { }

  ngOnInit() {
    this.myPlace = MyPlace.create(this.getAddress())
    this.service.getAddress().subscribe(x=>console.log(x)) //API確認用
  }
  getAddress(): string {
    return this.route.snapshot.paramMap.get('address');
  }

}

