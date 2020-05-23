import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game',
    LoadPokemon = '[Pokemon] Load Pokemon',
    LoadPokemonSuccess = '[Pokemon] Load Pokemon Success',
    LoadPokemonFailure = '[Pokemon] Load Pokemon Failure',
    SetGameLists = '[Pokemon] Load Game Lists',
    BuildGameMoveLists = '[Pokemon] Build Game Move Lists',
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
export class SetGameMoveLists implements Action {
  readonly type = PokemonActionTypes.SetGameLists;

  constructor(public payload: MoveLists){}
}
export class BuildGameMoveLists implements Action {
  readonly type = PokemonActionTypes.BuildGameMoveLists;

  constructor(public payload: Pokemon){}
}
export type PokemonActions = SetSelectedGame
| LoadPokemon
| LoadPokemonFailure
| LoadPokemonSuccess
| SetGameMoveLists
| BuildGameMoveLists;
