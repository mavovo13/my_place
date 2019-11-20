import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.css']
})
export class DetailSearchComponent implements OnInit {
  profileForm = new FormGroup({
       firstName: new FormControl('yuki'),
       lastName:  new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void {
    console.warn(this.profileForm.value)
  }
  onclick(): void{
    // this.name.setValue('set')
  }
}
