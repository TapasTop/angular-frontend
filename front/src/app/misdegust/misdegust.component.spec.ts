import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisdegustComponent } from './misdegust.component';

describe('MisdegustComponent', () => {
  let component: MisdegustComponent;
  let fixture: ComponentFixture<MisdegustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisdegustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisdegustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
