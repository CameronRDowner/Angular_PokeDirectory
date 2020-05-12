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
    LoadAllPokemon = '[Browse] Load All Pokemon',
    SearchPokemon = '[Browse] Search Pokemon',
    UpdateTotalPages = '[Browse] Update Total Pages',
    UpdateCurrentPage = '[Browse] Update Current Page',
    InitializeOffsets = '[Browse] Initialize Offsets',
    LoadNextPage = '[Browse] Load Next Page',
    LoadPreviousPage = '[Browse] Load Previous Page',
    SortPokemonByName = '[Browse] Sort Pokemon By Name',
    SortPokemonById = '[Browse] Sort Pokemon By Id'
}
export class SearchPokemon implements Action {
    readonly type = BrowseActionTypes.SearchPokemon;
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
}
export class UpdateTotalPages implements Action {
    readonly type = BrowseActionTypes.UpdateTotalPages;
}
export class UpdateCurrentPage implements Action {
    readonly type = BrowseActionTypes.UpdateCurrentPage;
}
export class InitializeOffsets implements Action {
    readonly type = BrowseActionTypes.InitializeOffsets;
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
  | InitializeResultsInView
  | SetListToSearch
  | SetSearchTerm
  | LoadAllPokemonSuccess
  | LoadAllPokemonFailure
  | LoadAllPokemon
  | ClearSearchTerm
  | SearchPokemon
  | UpdateTotalPages
  | UpdateCurrentPage
  | InitializeOffsets
  | LoadNextPage
  | LoadPreviousPage
  | SortPokemonByName
  | SortPokemonById;
