import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesetComponent } from './moveset.component';

describe('MovesetComponent', () => {
  let component: MovesetComponent;
  let fixture: ComponentFixture<MovesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
