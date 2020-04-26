import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonContainer } from './pokemon.container';

describe('PokemonPageComponent', () => {
  let component: PokemonContainer;
  let fixture: ComponentFixture<PokemonContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
