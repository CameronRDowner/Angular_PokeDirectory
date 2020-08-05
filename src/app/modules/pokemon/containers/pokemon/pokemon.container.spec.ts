import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonContainer } from './pokemon.container';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('PokemonContainer', () => {
  let component: PokemonContainer;
  let fixture: ComponentFixture<PokemonContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonContainer ],
      imports: [ RouterTestingModule, StoreModule.forRoot({}) ]
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
