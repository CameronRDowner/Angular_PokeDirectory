import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingControlsComponent } from './sorting-controls.component';

describe('SortingControlsComponent', () => {
  let component: SortingControlsComponent;
  let fixture: ComponentFixture<SortingControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
