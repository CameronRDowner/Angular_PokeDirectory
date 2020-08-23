import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';
import { LocationAreaEncounter } from '../models/location-area-encounter';
import { PokemonAbility } from '../models/pokemon-ability';
import { EncounterLists } from '../models/encounter-lists';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game',
    LoadPokemon = '[Pokemon] Load Pokemon',
    LoadPokemonSuccess = '[Pokemon] Load Pokemon Success',
    LoadPokemonFailure = '[Pokemon] Load Pokemon Failure',
    LoadMoveList = '[Pokemon] Load Move List',
    LoadMoveListSuccess = '[Pokemon] Load Move List Success',
    SetMoveLists = '[Pokemon] Set Move Lists',
    SetGamesFeatured = '[Pokemon] Set Games Featured',
    LoadEncounters = '[Pokemon] Load Encounters',
    LoadEncountersSuccess = '[Pokemon] Load Encounters Success',
    LoadEncountersFailure = '[Pokemon] Load Encounters Failure',
    SetEncounterLists = '[Pokemon] Set Encounter Lists',
    SetAbilities = '[Pokemon] Set Abilities',
    SetHiddenAbilities = '[Pokemon] Set Hidden Abilities'
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
export class LoadMoveList implements Action {
  readonly type = PokemonActionTypes.LoadMoveList;
}
export class LoadMoveListSuccess implements Action {
  readonly type = PokemonActionTypes.LoadMoveListSuccess;

  constructor(public payload: MoveLists){}
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
export class SetEncounterLists implements Action{
  readonly type = PokemonActionTypes.SetEncounterLists;
  constructor(public payload: EncounterLists){}
}
export class SetAbilities implements Action {
  readonly type = PokemonActionTypes.SetAbilities;
  constructor(public payload: Array<PokemonAbility>){}
}
export class SetHiddenAbilities implements Action {
  readonly type = PokemonActionTypes.SetHiddenAbilities;
  constructor(public payload: Array<PokemonAbility>){}
}
export type PokemonActions = LoadPokemon
| LoadPokemonFailure
| LoadPokemonSuccess
| SetMoveLists
| LoadMoveList
| LoadMoveListSuccess
| SetGamesFeatured
| LoadEncounters
| LoadEncountersSuccess
| LoadEncountersFailure
| SetEncounterLists
| SetSelectedGame
| SetAbilities
| SetHiddenAbilities;
