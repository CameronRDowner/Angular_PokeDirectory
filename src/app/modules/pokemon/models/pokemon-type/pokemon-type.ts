import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

export interface PokemonType {
    slot: number,
    type: NamedAPIResource[]
}
