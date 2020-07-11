import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
    resultsInView: NamedAPIResource[],
    allResults:NamedAPIResource[],
    allPokemon:NamedAPIResource[],
    currentList:string,
    startOffset:number,
    endOffset:number,
    maxResultsPerPage: number,
    totalPages:number,
    currentPage:number,
    alertModalVisible:boolean,
    alertModalMessage:string
}
const initialState: BrowseState = {
    resultsInView: null,
    allResults: null,
    allPokemon: null,
    currentList: "Pokemon",
    startOffset: 0,
    endOffset: 15,
    maxResultsPerPage: 15,
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
      case BrowseActionTypes.SetCurrentList: {
        return {
          ...state,
          currentList: action.payload
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
      case BrowseActionTypes.SortPokemonById: {
        const _resultsInView = state.resultsInView.slice(0);
        _resultsInView.sort((resultA, resultB)=>{
          let idA = parseInt(resultA.url.substring(34,resultA.url.length -1));
          let idB = parseInt(resultB.url.substring(34,resultB.url.length -1));
          return idA - idB;
        })
        return {
          ...state,
          resultsInView: _resultsInView
        }
      }
      case BrowseActionTypes.SortPokemonByName: {
        let _resultsInView = state.resultsInView.slice(0);
        _resultsInView.sort((resultA, resultB)=>{
          let nameA = resultA.name.toLowerCase();
          let nameB = resultB.name.toLowerCase();
          if(nameA < nameB){ return -1;}
          if(nameA > nameB){ return 1;}
          return 0;
        })
        return {
          ...state,
          resultsInView : _resultsInView,
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