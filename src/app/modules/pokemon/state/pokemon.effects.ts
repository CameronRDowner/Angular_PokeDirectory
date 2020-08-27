import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, forkJoin } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Action, Store } from '@ngrx/store';
import * as pokemonActions from './pokemon.actions';
import { State } from '../../../app.state'
import { switchMap, map, catchError, withLatestFrom} from 'rxjs/operators';
import * as pokemonSelectors from '../state'
import { MoveLists } from '../models/move-lists';
import { Move } from '../models/move';
import { EncounterLists } from '../models/encounter-lists';
import { EncounterCondition } from '../models/encounter-condition';
import { EncounterLocation } from '../models/encounter-location';
import { PokemonEncounter } from '../models/pokemon-encounter';
import { GamesToGameHelper } from '../../pokemon/models/games-to-game-helper';
import { GameToGamesHelper } from '../models/game-to-games-helper';

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
      let gameToGamesHelper = new GameToGamesHelper();
      if(moveLists[gameToGamesHelper[action.payload]][0].moveInfo === null){
        apiCalls = [moveLists[gameToGamesHelper[action.payload]].map(_move=> this.pokemonService.getMove(_move.moveUrl))]
        return forkJoin(...apiCalls).pipe(
          map(response=>{
            let newMoveList = moveLists[gameToGamesHelper[action.payload]].map((_move, index)=> {
              return { ..._move, moveInfo: response[index] }
            })
            return new pokemonActions.LoadMoveListSuccess({...moveLists, [gameToGamesHelper[action.payload]]: newMoveList } as MoveLists)
          })
        ) 
      }
    })
  )
@Effect()
  buildGamesFeatured$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.SetMoveLists>(pokemonActions.PokemonActionTypes.SetMoveLists),
    map((action)=>{
      const gamesToGameHelper = new GamesToGameHelper();
      let gamesFeatured = [];
      Object.keys(action.payload).map(key=>{
        if(action.payload[key].length !== 0){
          gamesFeatured = gamesFeatured.concat(gamesToGameHelper[key])
        }
      })
      return new pokemonActions.SetGamesFeatured(gamesFeatured)
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
@Effect()
  buildEncounterLists$: Observable<Action> = this.actions$.pipe(
    ofType<pokemonActions.LoadEncountersSuccess>(pokemonActions.PokemonActionTypes.LoadEncountersSuccess),
    map( action =>{
      let newEncounterLists = new EncounterLists();
      action.payload.map(pokemonEncounter=>{
        const _locationName = pokemonEncounter.location_area.name;
        pokemonEncounter.version_details.map(versionDetail=>{
          let encounterLocation = {locationName: _locationName, levelsEncountered: []} as EncounterLocation;
          const gameTitle = versionDetail.version.name;
          versionDetail['encounter_details'].map(encounterDetail=>{
            const _atLevel = encounterDetail.max_level;
            const _method = encounterDetail.method.name;
            const _conditionName = (encounterDetail.condition_values.length !== 0) ? encounterDetail.condition_values[0].name : null
            const _chance = encounterDetail.chance;
            const indexOfDuplicateLevel = encounterLocation.levelsEncountered.findIndex(encounter=> encounter.atLevel === _atLevel);
            if(indexOfDuplicateLevel !== -1){
              const indexOfDuplicateCondition = encounterLocation.levelsEncountered[indexOfDuplicateLevel].conditions.findIndex(condition=> condition.conditionName === _conditionName);
              if(indexOfDuplicateCondition === -1){
                const newCondition = {chance: _chance, conditionName: _conditionName} as EncounterCondition 
                encounterLocation.levelsEncountered[indexOfDuplicateLevel].conditions.push(newCondition);
              }
            }
            else{
              let pokemonEncounter = { atLevel: _atLevel, method: _method, conditions: []} as PokemonEncounter;
              pokemonEncounter.conditions.push({chance: _chance, conditionName: _conditionName});
              encounterLocation.levelsEncountered.push(pokemonEncounter);
            }
          })
          newEncounterLists[gameTitle].push(encounterLocation)
        })
      })
      return (new pokemonActions.SetEncounterLists(newEncounterLists))
    })
  );
 }
