import { PokemonSprites } from '../pokemon-sprites/pokemon-sprites';
import { PokemonMove } from '../../../../shared/models/pokemon-move/pokemon-move';

export class Pokemon {
    id:number;
    name:string;
    height: number;
    weight: number;
    sprites:PokemonSprites;
    moves:PokemonMove[];

    constructor(_id?:number, _name?:string, _sprites?:PokemonSprites, _moves?:PokemonMove[]){
        this.id = _id;
        this.name = _name;
        this.sprites = new PokemonSprites(_sprites.front_default);
        this.moves = _moves;
    }
}

