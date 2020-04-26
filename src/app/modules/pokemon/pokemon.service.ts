import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from '../../shared/models/named-apiresource-list';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon';
import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeApiUrl:string ='https://pokeapi.co/api/v2/pokemon/';
  private pokemonLimit:string='?offset=0&limit=807';

  getAllPokemon():Observable<NamedAPIResourceList>{
    return this.httpClient.get<NamedAPIResourceList>(`${this.pokeApiUrl}${this.pokemonLimit}`);
  }
  getPokemon(pokemonId?:number, pokemonName?:string):Observable<Pokemon>{
    if(pokemonName === undefined && pokemonId == undefined){
      console.log('Cannot retrieve pokemon without an Id or name');
    }
    return this.httpClient.get<Pokemon>(`${this.pokeApiUrl}${pokemonId !== undefined? pokemonId : pokemonName }`);
  }
  getPokemonOfTheDay():Observable<Pokemon>{
    return this.getPokemon(this.getDayOfYear());
  }
  private getDayOfYear():number{
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  constructor(private httpClient:HttpClient) {
   }
}
