import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlsContainer } from './search-controls.container';

describe('SearchControlsComponent', () => {
  let component: SearchControlsContainer;
  let fixture: ComponentFixture<SearchControlsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControlsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
