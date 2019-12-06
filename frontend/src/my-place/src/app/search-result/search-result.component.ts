import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';
import { Address } from '../model/address-model';

export class Point{
  name: string;
  point: number;
}

export class MyPlace {
  address: Address;
  points: Point[];

  private constructor(address: Address, points:Point[]){
    this.address = address;
    this.points = points;
  }

  get totalPoint(): number{
    return this.points
      .map(p=>p.point)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  static create(address: Address, points: Point[]): MyPlace{
    return new MyPlace(address, points);
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
    const post_code:string = this.getPostCode();
    this.myPlace = MyPlace.create({post_code: "", display_name:""}, [{name:"", point:0}]);
    
    this.service.getMyPlace(post_code).subscribe( mp =>{
      const address: Address = {post_code: mp.post_code, display_name: mp.display_name};
      const points: Point[] = mp.points;

      this.myPlace = MyPlace.create(address, points);
    });
  }
  getPostCode(): string {
    return this.route.snapshot.paramMap.get('post_code');
  }

}

