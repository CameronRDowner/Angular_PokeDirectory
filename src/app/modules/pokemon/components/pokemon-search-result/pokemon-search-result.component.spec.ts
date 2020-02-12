import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchResultComponent } from './pokemon-search-result.component';

describe('PokemonSearchResultComponent', () => {
  let component: PokemonSearchResultComponent;
  let fixture: ComponentFixture<PokemonSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
