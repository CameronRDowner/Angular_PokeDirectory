import { PokemonActionTypes, PokemonActions } from './pokemon.actions';
import { Pokemon } from '../models/pokemon';
import { MoveLists } from '../models/move-lists';
import { LocationAreaEncounter } from '../models/location-area-encounter';
import { PokemonAbility } from '../models/pokemon-ability';
import { EncounterLists } from '../models/encounter-lists';

export interface PokemonState {
    selectedGame: string,
    pokemon:Pokemon,
    moveLists:MoveLists,
    gamesFeatured:Array<string>,
    encounterLists:EncounterLists,
    abilities:Array<PokemonAbility>,
    hiddenAbilities: Array<PokemonAbility>
}

const initialState: PokemonState = {
    selectedGame: null,
    pokemon: {} as Pokemon,
    moveLists: {} as MoveLists,
    gamesFeatured: [],
    encounterLists: new EncounterLists(),
    abilities:[],
    hiddenAbilities:[]
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
        case PokemonActionTypes.LoadEncountersFailure: {
            console.log(action.payload);
            return {
                ...state
            }
        }
        case PokemonActionTypes.SetEncounterLists:{
            return {
                ...state,
                encounterLists: action.payload
            }
        }
        case PokemonActionTypes.LoadMoveListSuccess: {

            return {
                ...state,
                moveLists: action.payload
            }
        }
        case PokemonActionTypes.SetAbilities: {

            return {
                ...state,
                abilities: action.payload
            }
        }
        case PokemonActionTypes.SetHiddenAbilities: {

            return {
                ...state,
                hiddenAbilities: action.payload
            }
        }
        default:
            return state;
    }
}