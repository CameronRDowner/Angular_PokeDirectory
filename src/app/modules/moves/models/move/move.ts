import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

export class Move {
    id: number;
    name: string;
    pp: number;
    power: number;
    damage_class:NamedAPIResource;
    constructor(){
        
    }
}
