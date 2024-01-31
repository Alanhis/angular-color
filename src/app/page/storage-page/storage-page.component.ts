import { Component } from '@angular/core';
import { StorageColorService } from 'src/app/service/storage-color.service';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.css']
})
export class StoragePageComponent {
  color: any = []
  constructor(private storage: StorageColorService) {
  }
  deleteStorage(index: number) {
    this.color = this.color.filter((data: any) => data.index !== index)
    this.storage.deleteColor(index)
  }
  ngOnInit() {
    this.color = this.storage.getStorageColor()
    console.log(this.color)
  }
}
