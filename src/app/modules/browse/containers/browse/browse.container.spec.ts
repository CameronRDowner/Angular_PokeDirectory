import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseContainer } from './browse.container';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

describe('BrowseContainer', () => {
  let component: BrowseContainer;
  let fixture: ComponentFixture<BrowseContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), StoreModule.forRoot([])],
      declarations: [ BrowseContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
