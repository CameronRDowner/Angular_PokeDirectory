import { PokemonEncounter } from './pokemon-encounter';

export interface EncounterLocation {
    locationName:string
    levelsEncountered:Array<PokemonEncounter>
}
