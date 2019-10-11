import { PokemonSprites } from './pokemon-sprites';

export class Pokemon {
    id:number;
    name:string;
    sprites:PokemonSprites;

    constructor(_id?:number, _name?:string, _sprites?:PokemonSprites){
        this.id = _id;
        this.name = _name;
        this.sprites = new PokemonSprites(_sprites.front_default);
    }
}

