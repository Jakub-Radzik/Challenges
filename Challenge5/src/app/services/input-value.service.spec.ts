import { TestBed } from '@angular/core/testing';

import { InputValueService } from './input-value.service';

describe('InputValueService', () => {
  let service: InputValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
