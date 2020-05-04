import { Action } from '@ngrx/store';
import { Pokemon } from '../models/pokemon';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game',
    LoadPokemon = '[Pokemon] Load Pokemon',
    LoadPokemonSuccess = '[Pokemon] Load Pokemon Success',
    LoadPokemonFailure = '[Pokemon] Load Pokemon Failure'
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
export type PokemonActions = SetSelectedGame
| LoadPokemon
| LoadPokemonFailure
| LoadPokemonSuccess;
