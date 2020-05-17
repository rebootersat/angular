import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSummaryComponent } from './power-summary.component';

describe('PowerSummaryComponent', () => {
  let component: PowerSummaryComponent;
  let fixture: ComponentFixture<PowerSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
