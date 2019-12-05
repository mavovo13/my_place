import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {GeoSearchService} from './geo-search.service';
import {Addresses, Address} from '../model/address-model';

@Component({
  selector: 'app-geo-search',
  templateUrl: './geo-search.component.html',
  styleUrls: ['./geo-search.component.css']
})
export class GeoSearchComponent implements OnInit {
  addresses: Address[];
  selected: string = '';

  constructor(private router: Router, private service: GeoSearchService) { }

  ngOnInit() {
    this.getAddress();
  }

  getAddress(): void{
    this.service.getAddresses().subscribe(retval=>
      {
        this.addresses=retval.addresses;
      });
  }

  onClick(address: string): void{
    this.router.navigate(["/search-result/"+address]);
  }

}
