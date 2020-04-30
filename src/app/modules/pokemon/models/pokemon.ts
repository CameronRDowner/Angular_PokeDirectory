import { PokemonSprites } from './pokemon-sprites';
import { PokemonMove } from '../../../shared/models/pokemon-move';
import { PokemonType } from './pokemon-type';
import { PokemonAbility } from './pokemon-ability';
import { PokemonStat } from './pokemon-stat';

export interface Pokemon {
    id:number;
    name:string;
    height: number;
    weight: number;
    sprites:PokemonSprites;
    moves:PokemonMove[];
    types:PokemonType;
    abilities:PokemonAbility[];
    stats:PokemonStat[]; 
    
}

