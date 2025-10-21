import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoReparacion } from './diagnostico-reparacion';

describe('DiagnosticoReparacion', () => {
  let component: DiagnosticoReparacion;
  let fixture: ComponentFixture<DiagnosticoReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticoReparacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoReparacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
