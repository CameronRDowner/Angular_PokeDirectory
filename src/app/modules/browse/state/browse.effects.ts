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
      this.store$.select(browseSelectors.getAllPokemon)
    ),
    map(([action, allPokemon]) => {
      const searchResults = allPokemon.filter(pokemon => pokemon.name.includes(action.payload))
      if(searchResults.length === 0){
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
    switchMap(action => [
      new browseActions.OpenAlertModal(action.payload),
      new browseActions.SetAllPokemonInView()
    ])
  )
  @Effect()
  updateCurrentPage$: Observable<Action> = this.actions$.pipe(
    ofType<browseActions.LoadNextPage>(
      browseActions.BrowseActionTypes.LoadNextPage, 
      browseActions.BrowseActionTypes.LoadPreviousPage, 
      browseActions.BrowseActionTypes.SetResultsInView
      ),
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
    ofType<browseActions.SetAllPokemonInView>(browseActions.BrowseActionTypes.SetResultsInView, browseActions.BrowseActionTypes.SearchPokemonSuccess),
    withLatestFrom(
      this.store$.select(browseSelectors.getMaxResultsPerPage),
      this.store$.select(browseSelectors.getResultsInView)
    ),
    map(([action, maxResultsPerPage, resultsInView])=>{
      const totalPages = Math.ceil(resultsInView.length / maxResultsPerPage)
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
  sortPokemonById$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.SortPokemonById),
    withLatestFrom(
      this.store$.select(browseSelectors.getResultsInView)
    ),
    map(([action, resultsInView])=>{
      const sortedResults = resultsInView.slice(0);
        sortedResults.sort((resultA, resultB)=>{
          let idA = parseInt(resultA.url.substring(34,resultA.url.length -1));
          let idB = parseInt(resultB.url.substring(34,resultB.url.length -1));
          return idA - idB;
        })
        return new browseActions.SetResultsInView(sortedResults);
    })
  )
  @Effect()
  sortPokemonByName$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.SortPokemonByName),
    withLatestFrom(
      this.store$.select(browseSelectors.getResultsInView)
    ),
    map(([action, resultsInView])=>{
      const sortedResults = resultsInView.slice(0);
      sortedResults.sort((resultA, resultB)=>{
        let nameA = resultA.name.toLowerCase();
        let nameB = resultB.name.toLowerCase();
        if(nameA < nameB){ return -1;}
        if(nameA > nameB){ return 1;}
        return 0;
      })
        return new browseActions.SetResultsInView(sortedResults);
    })
  )
  @Effect()
  setAllPokemonInView$: Observable<Action> = this.actions$.pipe(
    ofType(browseActions.BrowseActionTypes.SetAllPokemonInView),
    withLatestFrom(this.store$.select(browseSelectors.getAllPokemon)),
    map(([action, allPokemon])=>
    new browseActions.SetResultsInView(allPokemon)
    )
  )
}