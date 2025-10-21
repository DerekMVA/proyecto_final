import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaMantenimiento } from './cola-mantenimiento';

describe('ColaMantenimiento', () => {
  let component: ColaMantenimiento;
  let fixture: ComponentFixture<ColaMantenimiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaMantenimiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaMantenimiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
