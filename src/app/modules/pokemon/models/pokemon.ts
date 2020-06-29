import { PokemonSprites } from './pokemon-sprites';
import { PokemonMove } from '../../../shared/models/pokemon-move';
import { PokemonType } from './pokemon-type';
import { PokemonAbility } from './pokemon-ability';
import { PokemonStat } from './pokemon-stat';
import { LocationAreaEncounter } from './location-area-encounter';

export interface Pokemon {
    id:number;
    name:string;
    height: number;
    weight: number;
    order:number;
    sprites:PokemonSprites;
    moves:PokemonMove[];
    types:PokemonType;
    abilities:PokemonAbility[];
    stats:PokemonStat[]; 
    location_area_encounters:string
}

