import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
    resultsInView: NamedAPIResource[],
    allResults:NamedAPIResource[],
    allPokemon:NamedAPIResource[],
    allResultsOffset:number,
    totalPages: number,
    currentPage:number,
    searchTerm:string,
    searchList:string
}
const initialState: BrowseState = {
    resultsInView: null,
    allResults: null,
    allPokemon: null,
    allResultsOffset: 0,
    totalPages: 0,
    currentPage: 0,
    searchTerm: "",
    searchList: "Pokemon"
};
export function reducer(state = initialState, action: BrowseActions): BrowseState {

    switch (action.type) {
      case BrowseActionTypes.SetResultsInView:
        return {
          ...state,
          resultsInView: action.payload
        };
      case BrowseActionTypes.InitializeResultsInView:
        return {
          ...state,
          resultsInView: action.payload
        };
      case BrowseActionTypes.SetSearchList:
        return {
          ...state,
          searchList: action.payload
        };
  
      
  
      default:
        return state;
    }
  }