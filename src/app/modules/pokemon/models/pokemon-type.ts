import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export interface PokemonType {
    slot: number,
    type: NamedAPIResource[]
}
