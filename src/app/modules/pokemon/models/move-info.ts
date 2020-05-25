import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

export interface MoveInfo {
    id: number;
    name: string;
    pp: number;
    power: number;
    damage_class:NamedAPIResource;
}
