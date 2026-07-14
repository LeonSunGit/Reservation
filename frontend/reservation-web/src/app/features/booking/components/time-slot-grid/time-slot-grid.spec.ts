import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotGrid } from './time-slot-grid';

describe('TimeSlotGrid', () => {
  let component: TimeSlotGrid;
  let fixture: ComponentFixture<TimeSlotGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSlotGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeSlotGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
