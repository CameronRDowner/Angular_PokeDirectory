import { PokemonActionTypes, PokemonActions } from './pokemon.actions';
import { Pokemon } from '../models/pokemon';

export interface PokemonState {
    selectedGame: string,
    pokemon:Pokemon,
}

const initialState: PokemonState = {
    selectedGame: null,
    pokemon: null
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
        default:
            return state;
    }
}