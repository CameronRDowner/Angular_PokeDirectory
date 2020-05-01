import { PokemonActionTypes, PokemonActions } from './pokemon.actions';

export interface PokemonState {
    selectedGame: string
}

const initialState: PokemonState = {
    selectedGame: null
}

export function reducer(state = initialState, action: PokemonActions): PokemonState {
    switch(action.type) {
       case PokemonActionTypes.SetSelectedGame:
            return {
                ...state,
                selectedGame: action.payload
            };
        default:
            return state;
    }
}