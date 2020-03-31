import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioClusterComponent } from './radio-cluster.component';

describe('RadioClusterComponent', () => {
  let component: RadioClusterComponent;
  let fixture: ComponentFixture<RadioClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
