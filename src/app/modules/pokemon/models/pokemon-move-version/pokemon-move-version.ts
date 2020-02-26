import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

export class PokemonMoveVersion {
    move_learn_method:NamedAPIResource;
    version_group:NamedAPIResource;
    level_learned_at:number;
}
