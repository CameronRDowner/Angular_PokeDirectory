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
        case PokemonActionTypes.SetGameLists: {
            return {
                ...state,
                gameMoveLists: action.payload
            }
        }
        case PokemonActionTypes.BuildGameMoveLists: {
            let gameMoveNames = {
                "red-blue":[],
                "yellow":[],
                "gold-silver":[],
                "crystal":[],
                "ruby-sapphire":[],
                "emerald":[],
                "firered-leafgreen":[],
                "diamond-pearl":[],
                "platinum":[],
                "heartgold-soulsilver":[],
                "black-white":[],
                "black-2-white-2":[],
                "x-y":[],
                "omega-ruby-alpha-sapphire":[],
                "sun-moon":[],
                "ultra-sun-ultra-moon":[]
            }
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}