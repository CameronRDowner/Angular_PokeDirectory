import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game',
    LoadPokemon = '[Pokemon] Load Pokemon',
    LoadPokemonSuccess = '[Pokemon] Load Pokemon Success',
    LoadPokemonFailure = '[Pokemon] Load Pokemon Failure',
    SetGameLists = '[Pokemon] Load Game Lists',
    LoadMoveLists = '[Pokemon] Load Move Lists',
    SetMoveLists = '[Pokemon] Set Move Lists',
    SetGamesFeatured = '[Pokemon] Set Games Featured'
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
export type PokemonActions = SetSelectedGame
| LoadPokemon
| LoadPokemonFailure
| LoadPokemonSuccess
| SetMoveLists
| LoadMoveLists
| SetGamesFeatured;
