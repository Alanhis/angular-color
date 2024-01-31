import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  todayDate: Date = new Date();
  constructor() {
    setInterval(() => {
      this.todayDate = new Date();
    }, 1)
  }
}
