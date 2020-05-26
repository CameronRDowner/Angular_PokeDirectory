import { Move } from './move';
import { MoveInfo } from './move-info';

export class MoveLists {
    "red-blue": Array<Move>;
    "yellow": Array<Move>;
    "gold-silver": Array<Move>;
    "crystal": Array<Move>;
    "ruby-sapphire": Array<Move>;
    "emerald": Array<Move>;
    "firered-leafgreen": Array<Move>;
    "diamond-pearl": Array<Move>;
    "platinum": Array<Move>;
    "heartgold-soulsilver": Array<Move>;
    "black-white": Array<Move>;
    "black-2-white-2": Array<Move>;
    "x-y": Array<Move>;
    "omega-ruby-alpha-sapphire": Array<Move>;
    "sun-moon": Array<Move>;
    "ultra-sun-ultra-moon": Array<Move>;

    constructor(){
        this["red-blue"] = [],
        this.yellow = [],
        this["gold-silver"] = [],
        this.crystal = [],
        this["ruby-sapphire"] = [],
        this.emerald = [],
        this["firered-leafgreen"] = [],
        this["diamond-pearl"] = [],
        this.platinum = [],
        this["heartgold-soulsilver"] = [],
        this["black-white"] = [],
        this["black-2-white-2"] = [],
        this["x-y"] = [],
        this["omega-ruby-alpha-sapphire"] = [],
        this["sun-moon"] = [],
        this["ultra-sun-ultra-moon"] = []
    }
}
