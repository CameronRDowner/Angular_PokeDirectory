import { PokemonActionTypes, PokemonActions } from './pokemon.actions';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';
import { LocationAreaEncounter } from '../models/location-area-encounter';

export interface PokemonState {
    selectedGame: string,
    pokemon:Pokemon,
    moveLists:MoveLists,
    gamesFeatured:Array<string>,
    encounters:Array<LocationAreaEncounter>
}

const initialState: PokemonState = {
    selectedGame: "",
    pokemon: {} as Pokemon,
    moveLists: {} as MoveLists,
    gamesFeatured: [],
    encounters: []
}

export function reducer(state = initialState, action: PokemonActions): PokemonState {
    switch(action.type) {
       case PokemonActionTypes.SetSelectedGame:{
            return {
                ...state,
                selectedGame: action.payload
            };
       }
        case PokemonActionTypes.LoadPokemonSuccess:{
            return {
                ...state,
                pokemon: action.payload
            };
        }
        case PokemonActionTypes.LoadPokemonFailure:{
            console.log(action.payload);
            return {
                ...state
            }
        }
        case PokemonActionTypes.SetMoveLists: {
            return {
                ...state,
                moveLists: action.payload
            }
        }
        case PokemonActionTypes.SetGamesFeatured: {
            return {
                ...state,
                gamesFeatured: action.payload
            }
        }
        case PokemonActionTypes.LoadEncountersSuccess: {
            return {
                ...state,
                encounters: action.payload
            }
        }
        case PokemonActionTypes.LoadEncountersFailure: {
            console.log(action.payload);
            return {
                ...state
            }
        }
        case PokemonActionTypes.LoadMoveListSuccess: {

            return {
                ...state,
                moveLists: action.payload
            }
        }
        default:
            return state;
    }
}