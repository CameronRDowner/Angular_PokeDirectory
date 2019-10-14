import { TestBed } from '@angular/core/testing';

import { PokemonSearchService } from './pokemon-search.service';

describe('PokemonSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonSearchService = TestBed.get(PokemonSearchService);
    expect(service).toBeTruthy();
  });
});
