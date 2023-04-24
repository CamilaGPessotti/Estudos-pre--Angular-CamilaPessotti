import { TestBed } from '@angular/core/testing';

import { PreparoService } from './preparo.service';

describe('PreparoService', () => {
  let service: PreparoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
