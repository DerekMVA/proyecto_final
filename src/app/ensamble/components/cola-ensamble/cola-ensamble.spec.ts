import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaEnsamble } from './cola-ensamble';

describe('ColaEnsamble', () => {
  let component: ColaEnsamble;
  let fixture: ComponentFixture<ColaEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaEnsamble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaEnsamble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
