import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerDetailsComponent } from './transformer-details.component';

describe('TransformerDetailsComponent', () => {
  let component: TransformerDetailsComponent;
  let fixture: ComponentFixture<TransformerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
