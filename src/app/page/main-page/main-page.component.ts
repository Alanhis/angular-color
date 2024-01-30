import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  title = 'angular-color';
  response: any;
  input = ["N", "N", "N", "N", "N"];
  constructor(private fetch: FetchService) { }

  searchColor() { // Функция, предназначения для получения данных цветов через сторонние API
    this.fetch.post(this.input).subscribe((data: any) => {
      this.response = data.result
    })
  }

  lockColor(index: number) { // Функция для сохранения закрепления цветов 
    if (this.input[index] === "N") {
      this.input[index] = this.response[index];
    } else {
      this.input[index] = "N";
    }

  }

  saveColor(index: number) { // Функция для сохранения цветов в #a8b75e формате
    const color = this.response[index];
    navigator.clipboard.writeText("#" + ((1 << 24) + (color[0] << 16) + (color[1] << 8) + color[2]).toString(16).slice(1));
  }

  ngOnInit() {
    this.searchColor()
  }
}
