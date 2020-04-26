import { Action } from '@ngrx/store';
import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export enum BrowseActionTypes {
    SetResultsInView = '[Browse] Set Results In View',
    InitializeResultsInView = '[Browse] Initialize Results In View',
    SetSearchTerm = '[Browse] Set Search Term',
    ClearSearchTerm = '[Browse] Clear Search Term',
    SetListToSearch = '[Browse] Set Search List',
    LoadAllPokemonSuccess = '[Browse] Load All Pokemon Success',
    LoadAllPokemonFailure = '[Browse] Load All Pokemon Failure',
    LoadAllPokemon = '[Browse] Load All Pokemon'
}
export class SetResultsInView implements Action {
    readonly type = BrowseActionTypes.SetResultsInView;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export class InitializeResultsInView implements Action {
    readonly type = BrowseActionTypes.InitializeResultsInView;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export class SetSearchTerm implements Action {
    readonly type = BrowseActionTypes.SetSearchTerm;
  
    constructor(public payload: string) { }
}
export class SetListToSearch implements Action {
    readonly type = BrowseActionTypes.SetListToSearch;
  
    constructor(public payload: string) { }
}
export class LoadAllPokemonSuccess implements Action {
    readonly type = BrowseActionTypes.LoadAllPokemonSuccess;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export class LoadAllPokemonFailure implements Action {
    readonly type = BrowseActionTypes.LoadAllPokemonFailure;
  
    constructor(public payload: string) { }
}
export class LoadAllPokemon implements Action {
    readonly type = BrowseActionTypes.LoadAllPokemon;
}
export class ClearSearchTerm implements Action {
    readonly type = BrowseActionTypes.ClearSearchTerm;
    constructor(){}
}
export type BrowseActions = SetResultsInView
  | InitializeResultsInView
  | SetListToSearch
  | SetSearchTerm
  | LoadAllPokemonSuccess
  | LoadAllPokemonFailure
  | LoadAllPokemon
  | ClearSearchTerm;
