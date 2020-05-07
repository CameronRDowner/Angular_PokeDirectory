import { PokemonActionTypes, PokemonActions } from './pokemon.actions';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';

export interface PokemonState {
    selectedGame: string,
    pokemon:Pokemon,
    gameMoveLists:MoveLists,
}

const initialState: PokemonState = {
    selectedGame: null,
    pokemon: null,
    gameMoveLists: null
}

export function reducer(state = initialState, action: PokemonActions): PokemonState {
    switch(action.type) {
       case PokemonActionTypes.SetSelectedGame:
            return {
                ...state,
                selectedGame: action.payload
            };
        case PokemonActionTypes.LoadPokemonSuccess:
            return {
                ...state,
                pokemon: action.payload
            };
        case PokemonActionTypes.SetGameLists:
            return {
                ...state,
                gameMoveLists: action.payload
            }
        default:
            return state;
    }
}