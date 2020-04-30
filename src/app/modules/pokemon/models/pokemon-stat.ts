import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export interface PokemonStat {
    stat:NamedAPIResource,
    base_stat: number
}
