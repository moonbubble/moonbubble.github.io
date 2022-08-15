import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChipComponent } from './color-chip.component';

describe('ColorChipComponent', () => {
  let component: ColorChipComponent;
  let fixture: ComponentFixture<ColorChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
