import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export interface Address {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-geo-search',
  templateUrl: './geo-search.component.html',
  styleUrls: ['./geo-search.component.css']
})
export class GeoSearchComponent implements OnInit {
  addresses: Address[] = [
    {value: 'kyoto', viewValue: '京都市'},
    {value: 'kameoka', viewValue: '亀岡市'},
    {value: 'uji', viewValue: '宇治市'}
  ];
  selected: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(address: string): void{
    this.router.navigate(["/search-result/"+address]);
  }

}
