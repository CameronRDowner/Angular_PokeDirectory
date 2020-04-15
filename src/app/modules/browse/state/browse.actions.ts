import { Action } from '@ngrx/store';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

export enum BrowseActionTypes {
    SetResultsInView = '[Browse] Set Results In View',
    InitializeResultsInView = '[Browse] Initialize Results In View'
}
export class SetResultsInView implements Action {
    readonly type = BrowseActionTypes.SetResultsInView;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export class InitializeResultsInView implements Action {
    readonly type = BrowseActionTypes.InitializeResultsInView;
  
    constructor(public payload: NamedAPIResource[]) { }
}
export type BrowseActions = SetResultsInView
  | InitializeResultsInView;
