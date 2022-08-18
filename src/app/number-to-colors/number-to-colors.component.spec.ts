import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToColorsComponent } from './number-to-colors.component';

describe('NumberToColorsComponent', () => {
  let component: NumberToColorsComponent;
  let fixture: ComponentFixture<NumberToColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
