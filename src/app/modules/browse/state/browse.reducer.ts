import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
    resultsInView: NamedAPIResource[],
    allResults:NamedAPIResource[],
    allPokemon:NamedAPIResource[],
    searchTerm:string,
    listToSearch:string
}
const initialState: BrowseState = {
    resultsInView: null,
    allResults: null,
    allPokemon: null,
    searchTerm: "",
    listToSearch: "Pokemon"
};
export function reducer(state = initialState, action: BrowseActions): BrowseState {

    switch (action.type) {
      case BrowseActionTypes.SetResultsInView:
        return {
          ...state,
          resultsInView: action.payload
        };
      case BrowseActionTypes.LoadAllPokemonSuccess:
        return {
          ...state,
          allPokemon: action.payload
        };
  
      case BrowseActionTypes.SetListToSearch:
        return {
          ...state,
          listToSearch: action.payload
        };
      case BrowseActionTypes.ClearSearchTerm:
        return {
          ...state,
          searchTerm: ""
        };
      
  
      default:
        return state;
    }
  }