import { Action } from '@ngrx/store';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

export enum BrowseActionTypes {
    SetResultsInView = '[Browse] Set Results In View',
    InitializeResultsInView = '[Browse] Initialize Results In View',
    SetSearchTerm = '[Browse] Set Search Term',
    SetSearchList = '[Browse] Set Search List'
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
export class SetSearchList implements Action {
    readonly type = BrowseActionTypes.SetSearchList;
  
    constructor(public payload: string) { }
}
export type BrowseActions = SetResultsInView
  | InitializeResultsInView
  | SetSearchList
  | SetSearchTerm;
