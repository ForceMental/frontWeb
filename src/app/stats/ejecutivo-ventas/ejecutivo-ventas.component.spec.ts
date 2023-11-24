import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoVentasComponent } from './ejecutivo-ventas.component';

describe('EjecutivoVentasComponent', () => {
  let component: EjecutivoVentasComponent;
  let fixture: ComponentFixture<EjecutivoVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjecutivoVentasComponent]
    });
    fixture = TestBed.createComponent(EjecutivoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
