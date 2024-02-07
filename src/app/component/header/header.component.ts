import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  todayDate: Date = new Date();
  constructor() {
    setInterval(() => {
      this.todayDate = new Date();
    }, 1)
  }
}
