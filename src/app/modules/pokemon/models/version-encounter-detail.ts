import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { Encounter } from 'src/app/shared/models/encounter';

export interface VersionEncounterDetail {
    version:NamedAPIResource
    max_chance: number
    encounter_details:Encounter[]
}
