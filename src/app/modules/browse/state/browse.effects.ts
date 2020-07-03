import { Injectable } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as browseActions from './browse.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { State } from '../../../app.state';
import * as browseSelectors from '../state/'

@Injectable()
export class BrowseEffects {

  constructor(private pokemonService: PokemonService, private actions$: Actions, private store$: Store<State>) { }

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
  @Effect()
  searchPokemon$: Observable<Action> = this.actions$.pipe(
    ofType<browseActions.SearchPokemon>(browseActions.BrowseActionTypes.SearchPokemon),
    withLatestFrom(
      this.store$.select(browseSelectors.getAllPokemon),
      this.store$.select(browseSelectors.getSearchTerm)
    ),
    map(([action, allPokemon, searchTerm]) => {
      const searchResults = allPokemon.filter(pokemon => pokemon.name.includes(searchTerm))
      if(searchTerm === null){
        return (new browseActions.SearchPokemonFailure("Please add a searchterm to the search box"))
      }
      else if(searchResults.length === 0){
        return (new browseActions.SearchPokemonFailure("No Pokemon were found matching that name"))
      }
      else{
        return (new browseActions.SearchPokemonSuccess(searchResults))
      }
    }
      )
  )
  @Effect()
  searchPokemonFailure$: Observable<Action> = this.actions$.pipe(
    ofType<browseActions.SearchPokemonFailure>(browseActions.BrowseActionTypes.SearchPokemonFailure),
    map(action => new browseActions.OpenAlertModal(action.payload))
  )
}