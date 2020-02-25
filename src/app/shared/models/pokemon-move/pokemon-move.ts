import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { PokemonMoveVersion } from '../../../modules/pokemon/models/pokemon-move-version/pokemon-move-versiona';

export class PokemonMove {
    move:NamedAPIResource;
    version_group_details:PokemonMoveVersion[];
}
