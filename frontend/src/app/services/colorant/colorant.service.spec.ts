import { TestBed } from '@angular/core/testing';

import { ColorantService } from './colorant.service';

describe('ColorantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorantService = TestBed.get(ColorantService);
    expect(service).toBeTruthy();
  });
});
