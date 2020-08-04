import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlsContainer } from './search-controls.container';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('SearchControlsComponent', () => {
  let component: SearchControlsContainer;
  let fixture: ComponentFixture<SearchControlsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule.forRoot([]), StoreModule.forRoot([])],
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
