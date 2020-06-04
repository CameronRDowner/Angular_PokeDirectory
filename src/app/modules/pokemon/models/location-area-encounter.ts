import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { VersionEncounterDetail } from './version-encounter-detail';

export interface LocationAreaEncounter {
    location_area:NamedAPIResource
    version_details: VersionEncounterDetail[]
}
