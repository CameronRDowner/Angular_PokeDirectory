import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePageContainer } from './browse.container';

describe('BrowsePageComponent', () => {
  let component: BrowsePageContainer;
  let fixture: ComponentFixture<BrowsePageContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePageContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
