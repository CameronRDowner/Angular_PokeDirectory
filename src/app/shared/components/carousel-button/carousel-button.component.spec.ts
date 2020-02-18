import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselButtonComponent } from './carousel-button.component';

describe('CarouselButtonComponent', () => {
  let component: CarouselButtonComponent;
  let fixture: ComponentFixture<CarouselButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
