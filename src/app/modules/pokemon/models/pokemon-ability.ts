import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export interface PokemonAbility {
    is_hidden: boolean,
    slot: number,
    ability: NamedAPIResource
}
