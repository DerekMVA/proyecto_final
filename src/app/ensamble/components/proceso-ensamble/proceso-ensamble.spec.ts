import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoEnsamble } from './proceso-ensamble';

describe('ProcesoEnsamble', () => {
  let component: ProcesoEnsamble;
  let fixture: ComponentFixture<ProcesoEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoEnsamble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoEnsamble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
