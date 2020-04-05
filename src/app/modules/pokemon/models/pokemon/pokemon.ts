import { PokemonSprites } from '../pokemon-sprites/pokemon-sprites';
import { PokemonMove } from '../../../../shared/models/pokemon-move/pokemon-move';
import { PokemonType } from '../pokemon-type/pokemon-type';

export interface Pokemon {
    id:number;
    name:string;
    height: number;
    weight: number;
    sprites:PokemonSprites;
    moves:PokemonMove[];
    types:PokemonType; 
    
}

