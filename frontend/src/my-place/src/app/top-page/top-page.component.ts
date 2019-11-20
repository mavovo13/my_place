import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onclick(): void{
    this.router.navigate(["/map-search"]);
  }

}
