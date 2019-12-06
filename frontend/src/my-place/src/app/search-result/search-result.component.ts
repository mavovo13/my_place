import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from './search-result.service';
import { Address } from '../model/address-model';
import { MyPlace, MyPlacerPoint } from '../model/myplace-model';

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
      // APIとオブジェクトのマッピングはここで実装してください
      const address: Address = {post_code: mp.post_code, display_name: mp.display_name};
      const points: MyPlacerPoint[] = mp.points;

      this.myPlace = MyPlace.create(address, points);
    });
  }

  // urlの構造からpost_codeを取り出します。
  // 詳細はroutingを参照してください。
  getPostCode(): string {
    return this.route.snapshot.paramMap.get('post_code');
  }

}

