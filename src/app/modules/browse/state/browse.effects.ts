import { Injectable } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as browseActions from './browse.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
export class BrowseEffects {

  constructor(private pokemonService: PokemonService, private actions$: Actions) { }

  @Effect()
  loadAllPokemon$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.LoadAllPokemon),
    switchMap(action =>
      this.pokemonService.getAllPokemon().pipe(
        map(result => (new browseActions.LoadAllPokemonSuccess(result.results))),
        catchError(error=> of(new browseActions.LoadAllPokemonFailure(error)))
        )
  )
  );
  
}