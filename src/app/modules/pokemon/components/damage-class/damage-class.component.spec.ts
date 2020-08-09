import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageClassComponent } from './damage-class.component';

describe('DamageClassComponent', () => {
  let component: DamageClassComponent;
  let fixture: ComponentFixture<DamageClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
