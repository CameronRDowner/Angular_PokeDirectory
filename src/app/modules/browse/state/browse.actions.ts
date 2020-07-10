import { Action } from '@ngrx/store';
import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export enum BrowseActionTypes {
    SetResultsInView = '[Browse] Set Results In View',
    SetCurrentList = '[Browse] Set Current List',
    LoadAllPokemonSuccess = '[Browse] Load All Pokemon Success',
    LoadAllPokemonFailure = '[Browse] Load All Pokemon Failure',
    LoadAllPokemon = '[Browse] Load All Pokemon',
    SearchPokemon = '[Browse] Search Pokemon',
    SearchPokemonSuccess = '[Browse] Search Pokemon Success',
    SearchPokemonFailure = '[Browse] Search Pokemon Failure',
    SetTotalPages = '[Browse] Set Total Pages',
    SetCurrentPage = '[Browse] Set Current Page',
    SetStartOffset = '[Browse] Set Start Offset',
    SetEndOffset = '[Browse] Set End Offset',
    LoadNextPage = '[Browse] Load Next Page',
    LoadPreviousPage = '[Browse] Load Previous Page',
    SortPokemonByName = '[Browse] Sort Pokemon By Name',
    SortPokemonById = '[Browse] Sort Pokemon By Id',
    OpenAlertModal = '[Browse] Open Alert Modal',
    CloseAlertModal = '[Browse] Close Alert Modal'
}
export class CloseAlertModal implements Action {
    readonly type = BrowseActionTypes.CloseAlertModal;
}
export class OpenAlertModal implements Action {
    readonly type = BrowseActionTypes.OpenAlertModal;
    constructor(public payload:string){ }
}
export class SearchPokemon implements Action {
    readonly type = BrowseActionTypes.SearchPokemon;
    constructor(public payload: string) { }
}
export class SearchPokemonSuccess implements Action {
    readonly type = BrowseActionTypes.SearchPokemonSuccess;
    constructor(public payload: Array<NamedAPIResource>) { }
}
export class SearchPokemonFailure implements Action {
    readonly type = BrowseActionTypes.SearchPokemonFailure;
    constructor(public payload: string) { }
}
export class SetResultsInView implements Action {
    readonly type = BrowseActionTypes.SetResultsInView;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export class SetCurrentList implements Action {
    readonly type = BrowseActionTypes.SetCurrentList;
  
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
export class SetTotalPages implements Action {
    readonly type = BrowseActionTypes.SetTotalPages;
    constructor(public payload: number){}
}
export class SetCurrentPage implements Action {
    readonly type = BrowseActionTypes.SetCurrentPage;
    constructor(public payload: number){}
}
export class SetStartOffset implements Action {
    readonly type = BrowseActionTypes.SetStartOffset;
    constructor(public payload: number){}
}
export class SetEndOffset implements Action {
    readonly type = BrowseActionTypes.SetEndOffset;
    constructor(public payload: number){}
}
export class LoadNextPage implements Action {
    readonly type = BrowseActionTypes.LoadNextPage;
}
export class LoadPreviousPage implements Action {
    readonly type = BrowseActionTypes.LoadPreviousPage;
}
export class SortPokemonByName implements Action {
    readonly type = BrowseActionTypes.SortPokemonByName;
}
export class SortPokemonById implements Action {
    readonly type = BrowseActionTypes.SortPokemonById;
}
export type BrowseActions = SetResultsInView
  | SetCurrentList
  | LoadAllPokemonSuccess
  | LoadAllPokemonFailure
  | LoadAllPokemon
  | SearchPokemon
  | SearchPokemonSuccess
  | SearchPokemonFailure
  | SetTotalPages
  | SetCurrentPage
  | SetStartOffset
  | SetEndOffset
  | LoadNextPage
  | LoadPreviousPage
  | SortPokemonByName
  | SortPokemonById;
