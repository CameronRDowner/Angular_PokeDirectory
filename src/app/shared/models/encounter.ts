import { NamedAPIResource } from './named-apiresource';

export interface Encounter {
    min_level: number
    max_level: number
    condition_values:NamedAPIResource
    chance: number
    method: NamedAPIResource
}
