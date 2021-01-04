import { TestBed } from '@angular/core/testing';

import { TiendaRopaService } from './tienda-ropa.service';

describe('TiendaRopaService', () => {
  let service: TiendaRopaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiendaRopaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
