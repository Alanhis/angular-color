import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { clear } from 'src/app/store/color.actions';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.sass']
})
export class StoragePageComponent {
  color$: any
  constructor(private store: Store<{ color: any }>) {
    this.color$ = store.select('color');

  }
  deleteStorage(index: number) {
    this.store.dispatch(clear({ index }))
  }
}
