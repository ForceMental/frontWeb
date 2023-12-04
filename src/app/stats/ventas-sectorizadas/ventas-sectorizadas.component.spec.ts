import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSectorizadasComponent } from './ventas-sectorizadas.component';

describe('VentasSectorizadasComponent', () => {
  let component: VentasSectorizadasComponent;
  let fixture: ComponentFixture<VentasSectorizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasSectorizadasComponent]
    });
    fixture = TestBed.createComponent(VentasSectorizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
