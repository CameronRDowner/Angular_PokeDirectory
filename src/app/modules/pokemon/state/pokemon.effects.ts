import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Action } from '@ngrx/store';
import * as pokemonActions from './pokemon.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PokemonEffects {

constructor(private pokemonService: PokemonService, private actions$: Actions) { }
    
@Effect()
  loadPokemon$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.LoadPokemon>(pokemonActions.PokemonActionTypes.LoadPokemon),
    switchMap( action =>
      this.pokemonService.getPokemon(action.payload).pipe(
        map(result => (new pokemonActions.LoadPokemonSuccess(result))),
        catchError(error=> of(new pokemonActions.LoadPokemonFailure(error)))
        )
  )
  );    
}