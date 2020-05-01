import { Action } from '@ngrx/store';

export enum PokemonActionTypes {
    SetSelectedGame = '[Pokemon] Set Selected Game'
}
export class SetSelectedGame implements Action {
    readonly type = PokemonActionTypes.SetSelectedGame;
  
    constructor(public payload: string) { }
  }
export type PokemonActions = SetSelectedGame;