import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { BrowseActions, BrowseActionTypes } from './browse.actions';

export interface BrowseState {
    resultsInView: NamedAPIResource[],
    allResults:NamedAPIResource[],
    allPokemon:NamedAPIResource[],
    currentList:string,
    searchTerm:string,
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
    currentList: "Pokemon",
    searchTerm: null,
    startOffset: 0,
    endOffset: 15,
    maxResultsPerPage: 15,
    currentPage: 1,
    totalPages: null,
    alertModalMessage: "",
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
      case BrowseActionTypes.SetSearchTerm: {
        return {
          ...state,
          searchTerm: action.payload
        };
      }
      case BrowseActionTypes.ClearSearchTerm: {
        return {
          ...state,
          searchTerm: null
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
      case BrowseActionTypes.UpdateTotalPages: {
        const _totalPages = Math.ceil(state.resultsInView.length / state.maxResultsPerPage)
        return {
          ...state,
          totalPages: _totalPages
        };
      }
      case BrowseActionTypes.UpdateCurrentPage: {
        const _currentPage = state.endOffset / state.maxResultsPerPage;
        return {
          ...state,
          currentPage: _currentPage
        };
      }
      case BrowseActionTypes.InitializeOffsets: {
        const _maxResultsPerPage = state.maxResultsPerPage
        return {
          ...state,
          startOffset: 0,
          endOffset: _maxResultsPerPage
        };
      }
      case BrowseActionTypes.LoadNextPage: {
        if(state.currentPage !== state.totalPages){
          const _currentPage = state.endOffset / state.maxResultsPerPage;
          const _startOffset = state.endOffset;
          const _endOffset = state.endOffset + state.maxResultsPerPage;
          return{
            ...state,
            startOffset: _startOffset,
            endOffset: _endOffset,
            currentPage: _currentPage
          }
        }
        else{
          return {
            ...state
          };
        }
      }
      case BrowseActionTypes.LoadPreviousPage: {
        if(state.currentPage !== 1){
          const _currentPage = state.endOffset / state.maxResultsPerPage;
          const _startOffset = state.startOffset - state.maxResultsPerPage;
          const _endOffset = state.endOffset + state.maxResultsPerPage;
          return{
            ...state,
            startOffset: _startOffset,
            endOffset: _endOffset,
            currentPage: _currentPage
          }
        }
        else{
          return {
            ...state
          };
        }
      }
      case BrowseActionTypes.SortPokemonById: {
        const _endOffset = state.maxResultsPerPage
        const _resultsInView = state.resultsInView.slice(0);
        _resultsInView.sort((resultA, resultB)=>{
          let idA = parseInt(resultA.url.substring(34,resultA.url.length -1));
          let idB = parseInt(resultB.url.substring(34,resultB.url.length -1));
          return idA - idB;
        })
        return {
          ...state,
          resultsInView: _resultsInView,
          currentPage: 1,
          startOffset: 0,
          endOffset: _endOffset
        }
      }
      case BrowseActionTypes.SortPokemonByName: {
        const _endOffset = state.maxResultsPerPage;
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
          currentPage: 1,
          startOffset: 0,
          endOffset: _endOffset
        }
      }
      default:
        return state;
    }
  }