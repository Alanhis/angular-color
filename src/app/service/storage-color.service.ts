import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageColorService {
  color: any = [];
  constructor() { }

  saveColor(data: unknown) {
    this.color.push(data)
  }
  getStorageColor() {
    return this.color
  }
  deleteColor(index: number) {
    this.color = this.color.filter((data: any) => data.index !== index)
  }
}
