import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private http: HttpClient) { }
  // Первая попытка использования данных 
  post(input: string[] | number[]) {
    return this.http.post('http://colormind.io/api/', JSON.stringify({ "input": input, "model": "default" }))
  }

}
