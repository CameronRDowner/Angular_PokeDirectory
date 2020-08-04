import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export interface MoveInfo {
    id: number;
    name: string;
    pp: number;
    power: number;
    accuracy: number;
    type: NamedAPIResource;
    damage_class:NamedAPIResource;
}
