import { TestBed } from '@angular/core/testing';

import { ProductBaseService } from './productbase.service';

describe('ProductbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBaseService = TestBed.get(ProductBaseService);
    expect(service).toBeTruthy();
  });
});
