import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';
import { LocationAreaEncounter } from '../models/location-area-encounter';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game',
    LoadPokemon = '[Pokemon] Load Pokemon',
    LoadPokemonSuccess = '[Pokemon] Load Pokemon Success',
    LoadPokemonFailure = '[Pokemon] Load Pokemon Failure',
    SetGameLists = '[Pokemon] Load Game Lists',
    LoadMoveLists = '[Pokemon] Load Move Lists',
    SetMoveLists = '[Pokemon] Set Move Lists',
    SetGamesFeatured = '[Pokemon] Set Games Featured',
    LoadEncounters = '[Pokemon] Load Encounters',
    LoadEncountersSuccess = '[Pokemon] Load Encounters Success',
    LoadEncountersFailure = '[Pokemon] Load Encounters Failure'
}
export class SetSelectedGame implements Action {
    readonly type = PokemonActionTypes.SetSelectedGame;
  
    constructor(public payload: string) { }
  }
export class LoadPokemon implements Action {
    readonly type = PokemonActionTypes.LoadPokemon;

    constructor(public payload: number) { }
  }
export class LoadPokemonSuccess implements Action {
    readonly type = PokemonActionTypes.LoadPokemonSuccess;
  
    constructor(public payload: Pokemon) { }
  }
export class LoadPokemonFailure implements Action {
    readonly type = PokemonActionTypes.LoadPokemonFailure;
  
    constructor(public payload: Pokemon) { }
  }
export class SetMoveLists implements Action {
  readonly type = PokemonActionTypes.SetMoveLists;

  constructor(public payload: MoveLists){}
}
export class LoadMoveLists implements Action {
  readonly type = PokemonActionTypes.LoadMoveLists;
}
export class SetGamesFeatured implements Action {
  readonly type = PokemonActionTypes.SetGamesFeatured;

  constructor(public payload: Array<string>){}
}
export class LoadEncounters implements Action {
  readonly type = PokemonActionTypes.LoadEncounters;
  constructor(public payload: string){}
}
export class LoadEncountersSuccess implements Action {
  readonly type = PokemonActionTypes.LoadEncountersSuccess;
  constructor(public payload: Array<LocationAreaEncounter>){}
}
export class LoadEncountersFailure implements Action {
  readonly type = PokemonActionTypes.LoadEncountersFailure;
  constructor(public payload: Array<LocationAreaEncounter>){}
}
export type PokemonActions = SetSelectedGame
| LoadPokemon
| LoadPokemonFailure
| LoadPokemonSuccess
| SetMoveLists
| LoadMoveLists
| SetGamesFeatured
| LoadEncounters
| LoadEncountersSuccess
| LoadEncountersFailure;
