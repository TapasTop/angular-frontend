import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegustacionesComponent } from './degustaciones.component';

describe('DegustacionesComponent', () => {
  let component: DegustacionesComponent;
  let fixture: ComponentFixture<DegustacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegustacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegustacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
