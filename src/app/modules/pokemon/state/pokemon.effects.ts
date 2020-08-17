import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from, forkJoin } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Action, Store, select } from '@ngrx/store';
import * as pokemonActions from './pokemon.actions';
import { State } from '../../../app.state'
import { switchMap, map, catchError, withLatestFrom, concatMap, toArray } from 'rxjs/operators';
import * as pokemonSelectors from '../state'
import { MoveLists } from '../models/move-lists';
import { Move } from '../models/move';

@Injectable()
export class PokemonEffects {

constructor(private pokemonService: PokemonService, private actions$: Actions, private store$: Store<State>) { }
    
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
@Effect()
  buildAbilityLists$: Observable<Action>=this.actions$.pipe(
    ofType<pokemonActions.LoadPokemonSuccess>(pokemonActions.PokemonActionTypes.LoadPokemonSuccess),
    switchMap(action => [
      new pokemonActions.SetAbilities(action.payload.abilities.filter(ability=> ability.is_hidden === false)),
      new pokemonActions.SetHiddenAbilities(action.payload.abilities.filter(ability => ability.is_hidden === true))
    ])
  )
@Effect()
buildMoveLists$: Observable<Action> = this.actions$.pipe(
  ofType<pokemonActions.LoadPokemonSuccess>(pokemonActions.PokemonActionTypes.LoadPokemonSuccess),
  map(action => {
    let moveLists = new MoveLists();
    action.payload.moves.map(pokemonMove=>{ pokemonMove.version_group_details.map(game =>{
      if(game.move_learn_method.name === "level-up" && game.version_group.name in moveLists){
        const move = {levelLearnedAt: game.level_learned_at, moveInfo: null, moveUrl: pokemonMove.move.url } as Move
        moveLists[game.version_group.name].push(move);
      }
    })

  })
  return  (new pokemonActions.SetMoveLists(moveLists));

  })
)
@Effect()
  loadMoveList$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.SetSelectedGame>(pokemonActions.PokemonActionTypes.SetSelectedGame),
    withLatestFrom(
      this.store$.select(pokemonSelectors.getMoveLists)
      ),
    switchMap(([action, moveLists])=> {
      let apiCalls = []
      if(moveLists[action.payload][0].moveInfo === null){
        apiCalls = [moveLists[action.payload].map(_move=> this.pokemonService.getMove(_move.moveUrl))]
        return forkJoin(...apiCalls).pipe(
          map(response=>{
            let newMoveList = moveLists[action.payload].map((_move, index)=> {
              return { ..._move, moveInfo: response[index] }
            })
            return new pokemonActions.LoadMoveListSuccess({...moveLists, [action.payload]: newMoveList } as MoveLists)
          })
        ) 
      }
    })
  )
@Effect()
  buildGamesFeatured$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.SetMoveLists>(pokemonActions.PokemonActionTypes.SetMoveLists),
    map((action)=>{ 
      return new pokemonActions.SetGamesFeatured(Object.keys(action.payload).filter(key=> action.payload[key].length !== 0))
    })
  )
@Effect()
  initializeSelectedGame$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.SetGamesFeatured>(pokemonActions.PokemonActionTypes.SetGamesFeatured),
    map((action)=>{
      return (new pokemonActions.SetSelectedGame(action.payload[0]))
    })
  )
@Effect()
  loadEncounters$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.LoadPokemonSuccess>(pokemonActions.PokemonActionTypes.LoadPokemonSuccess),
    switchMap( action =>
      this.pokemonService.getEncounters(action.payload.location_area_encounters).pipe(
        map(result => (new pokemonActions.LoadEncountersSuccess(result))),
        catchError(error=> of(new pokemonActions.LoadEncountersFailure(error)))
        )
  )
  );
 }
