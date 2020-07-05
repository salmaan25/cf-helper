import { Component, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor() {
  }
  
  ngOnInit() {
  }
  
  onClickTab(event: MatTabChangeEvent) {
    // console.log(event.index);
  }
}
