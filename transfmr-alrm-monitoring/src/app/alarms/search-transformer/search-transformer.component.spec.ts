import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransformerComponent } from './search-transformer.component';

describe('SearchTransformerComponent', () => {
  let component: SearchTransformerComponent;
  let fixture: ComponentFixture<SearchTransformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTransformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
