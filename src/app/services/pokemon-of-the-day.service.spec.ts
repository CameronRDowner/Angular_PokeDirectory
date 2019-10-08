import { TestBed } from '@angular/core/testing';

import { PokemonOfTheDayService } from './pokemon-of-the-day.service';

describe('PokemonOfTheDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonOfTheDayService = TestBed.get(PokemonOfTheDayService);
    expect(service).toBeTruthy();
  });
});
