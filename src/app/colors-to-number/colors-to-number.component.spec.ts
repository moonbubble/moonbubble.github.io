import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsToNumberComponent } from './colors-to-number.component';

describe('ColorsToNumberComponent', () => {
  let component: ColorsToNumberComponent;
  let fixture: ComponentFixture<ColorsToNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsToNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsToNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
