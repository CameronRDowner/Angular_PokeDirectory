import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOfTheDayComponent } from './pokemon-of-the-day.component';

describe('PokemonOfTheDayComponent', () => {
  let component: PokemonOfTheDayComponent;
  let fixture: ComponentFixture<PokemonOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
