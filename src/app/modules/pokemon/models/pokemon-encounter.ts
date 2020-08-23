import { EncounterCondition } from './encounter-condition';

export interface PokemonEncounter {
    atLevel: number,
    method: string,
    conditions: Array<EncounterCondition>
}
