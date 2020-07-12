import { Injectable } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as browseActions from './browse.actions';
import { switchMap, map, catchError, withLatestFrom, concatMap, mapTo } from 'rxjs/operators';
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
  @Effect()
  updateCurrentPage$: Observable<Action> = this.actions$.pipe(
    ofType<browseActions.LoadNextPage>(
      browseActions.BrowseActionTypes.LoadNextPage, 
      browseActions.BrowseActionTypes.LoadPreviousPage, 
      browseActions.BrowseActionTypes.SortPokemonById, 
      browseActions.BrowseActionTypes.SortPokemonByName),
    withLatestFrom(
      this.store$.select(browseSelectors.getMaxResultsPerPage),
      this.store$.select(browseSelectors.getEndOffset)
    ),
    map(([action, maxResultsPerPage, endOffset])=>{
      const currentPage = endOffset / maxResultsPerPage;
      return new browseActions.SetCurrentPage(currentPage)
    })

  )
  @Effect()
  initializeTotalPages$: Observable<Action> = this.actions$.pipe(
    ofType<browseActions.SetResultsInView>(browseActions.BrowseActionTypes.SetResultsInView),
    withLatestFrom(
      this.store$.select(browseSelectors.getMaxResultsPerPage)
    ),
    map(([action, maxResultsPerPage])=>{
      const totalPages = Math.ceil(action.payload.length / maxResultsPerPage)
      return new browseActions.SetTotalPages(totalPages);
    })
  )
  @Effect()
  initializeOffsets$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.SortPokemonById, browseActions.BrowseActionTypes.SortPokemonByName),
    withLatestFrom(this.store$.select(browseSelectors.getMaxResultsPerPage)),
    concatMap(([action, maxResultsPerPage])=>[
      new browseActions.SetStartOffset(0),
      new browseActions.SetEndOffset(maxResultsPerPage)
    ])
  )
  @Effect()
  initializeResultsInView$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.LoadAllPokemonSuccess, browseActions.BrowseActionTypes.ClearResultsInView),
    withLatestFrom(
      this.store$.select(browseSelectors.getCurrentList),
      this.store$.select(browseSelectors.getResultsInView),
      this.store$.select(browseSelectors.getAllPokemon),
    ),
    map(([action, currentList, resultsInView, allPokemon])=>{
      if(currentList === "Pokemon" && resultsInView === null){
        return new browseActions.SetResultsInView(allPokemon)
      }
    })
  )
}