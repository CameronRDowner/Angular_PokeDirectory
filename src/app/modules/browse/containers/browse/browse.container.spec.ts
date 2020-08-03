import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseContainer } from './browse.container';

describe('BrowseContainer', () => {
  let component: BrowseContainer;
  let fixture: ComponentFixture<BrowseContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
