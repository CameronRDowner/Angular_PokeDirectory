import { Injectable } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as browseActions from './browse.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
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
    map(action=> action.payload),
    switchMap(payload=>
      new browseActions.
      )
  )
  // @Effect()
//   loadMoveList$: Observable<Action> = this.actions$.pipe(
//     ofType(pokemonActions.PokemonActionTypes.SetSelectedGame),
//     withLatestFrom(
//       this.store$.select(pokemonSelectors.getMoveLists), 
//       this.store$.select(pokemonSelectors.getSelectedGame),
//       ),
//     map(([action, moveLists, selectedGame])=> {
//       let newMoveList = []
//       if(moveLists[selectedGame][0].moveInfo === null){
//         moveLists[selectedGame].map(_move=>{
//           this.pokemonService.getMoveTest(_move.moveUrl).subscribe(_moveInfo => {
//             console.log(_moveInfo)
//             newMoveList.push({..._move, moveInfo: _moveInfo } as Move)
//           })
//         })
//       }
//       console.log('movelist', newMoveList)
//       const newMoveLists = {...moveLists, [selectedGame]: newMoveList} as MoveLists
//       console.log('moveLists', newMoveLists)
//       return new pokemonActions.LoadMoveListSuccess(newMoveLists)
//     })
//   )
}