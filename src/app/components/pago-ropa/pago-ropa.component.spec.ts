import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoRopaComponent } from './pago-ropa.component';

describe('PagoRopaComponent', () => {
  let component: PagoRopaComponent;
  let fixture: ComponentFixture<PagoRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
