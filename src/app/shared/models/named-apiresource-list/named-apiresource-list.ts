import { NamedAPIResource } from '../named-api-resource/named-apiresource';

export interface NamedAPIResourceList {
    count:number;
    next:string;
    previous:string;
    results:NamedAPIResource[];
    

}
