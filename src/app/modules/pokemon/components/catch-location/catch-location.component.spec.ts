import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchLocationComponent } from './catch-location.component';

describe('PokemonLocationComponent', () => {
  let component: CatchLocationComponent;
  let fixture: ComponentFixture<CatchLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
