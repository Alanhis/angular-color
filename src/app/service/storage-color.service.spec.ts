import { TestBed } from '@angular/core/testing';

import { StorageColorService } from './storage-color.service';

describe('StorageColorService', () => {
  let service: StorageColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
