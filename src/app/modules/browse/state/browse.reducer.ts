import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
    resultsInView: NamedAPIResource[],
    allResults:NamedAPIResource[],
    allPokemon:NamedAPIResource[],
    startOffset:number,
    endOffset:number,
    maxResultsPerPage: number,
    totalPages:number,
    currentPage:number,
    alertModalVisible:boolean,
    alertModalMessage:string,
}
const initialState: BrowseState = {
    resultsInView: null,
    allResults: null,
    allPokemon: null,
    startOffset: 0,
    endOffset: 12,
    maxResultsPerPage: 12,
    currentPage: 1,
    totalPages: null,
    alertModalMessage: null,
    alertModalVisible: false
};
export function reducer(state = initialState, action: BrowseActions): BrowseState {

    switch (action.type) {
      case BrowseActionTypes.SearchPokemonSuccess: {
        return {
          ...state,
          resultsInView: action.payload
        };
      }
      case BrowseActionTypes.SetResultsInView: {
        return {
          ...state,
          resultsInView: action.payload
        };
      }
      case BrowseActionTypes.LoadAllPokemonSuccess: {
        return {
          ...state,
          allPokemon: action.payload
        };
      }
      case BrowseActionTypes.SetTotalPages: {
        return {
          ...state,
          totalPages: action.payload
        };
      }
      case BrowseActionTypes.SetCurrentPage: {
        return {
          ...state,
          currentPage: action.payload
        };
      }
      case BrowseActionTypes.SetStartOffset: {
        return {
          ...state,
          startOffset: action.payload,
        };
      }
      case BrowseActionTypes.SetEndOffset: {
        return {
          ...state,
          endOffset: action.payload,
        };
      }
      case BrowseActionTypes.LoadNextPage: {
          const _startOffset = state.endOffset;
          const _endOffset = state.endOffset + state.maxResultsPerPage;
          return{
            ...state,
            startOffset: _startOffset,
            endOffset: _endOffset,
          }
      }
      case BrowseActionTypes.LoadPreviousPage: {
          const _startOffset = state.startOffset - state.maxResultsPerPage;
          const _endOffset = state.endOffset - state.maxResultsPerPage;
          return{
            ...state,
            startOffset: _startOffset,
            endOffset: _endOffset
          }
      }
      case BrowseActionTypes.OpenAlertModal: {
        return {
          ...state,
          alertModalVisible: true,
          alertModalMessage: action.payload
        };
      }
      case BrowseActionTypes.CloseAlertModal: {
        return {
          ...state,
          alertModalVisible: false,
          alertModalMessage: null
        };
      }
      default:
        return state;
    }
  }