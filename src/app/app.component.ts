import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-color';
  response: any;
  input = ["N", "N", "N", "N", "N"];
  constructor(private http: HttpClient) { }
  searchColor() {
    this.http.post('http://colormind.io/api/', JSON.stringify({ "input": this.input, "model": "default" })).subscribe((data: any) => {
      this.response = data.result

    })
  }
  lockColor(index: number) {
    if (this.input[index] === "N") {
      this.input[index] = this.response[index];
    } else {
      this.input[index] = "N";
    }

  }
  saveColor(index: number) {
    const color = this.response[index];
    navigator.clipboard.writeText("#" + ((1 << 24) + (color[0] << 16) + (color[1] << 8) + color[2]).toString(16).slice(1));
  }
  ngOnInit() {
    this.searchColor()
  }
}
