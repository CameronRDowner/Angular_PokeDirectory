import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from '../../shared/models/named-apiresource-list/named-apiresource-list';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon/pokemon';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeApiUrl:string ='https://pokeapi.co/api/v2/pokemon/';
  private pokemonLimit:string='?offset=0&limit=809';

  private allPokemon:NamedAPIResource[];

  getAllPokemon(){
    return this.allPokemon;
  }
  private async retrieveAllPokemon(){
    let queryResult:NamedAPIResourceList;
    try{
      queryResult = await this.httpClient.get<NamedAPIResourceList>(`${this.pokeApiUrl}${this.pokemonLimit}`).toPromise();
    }
    catch(e){
      console.log(e);
    }
    this.allPokemon = queryResult.results;
  }
  retrievePokemon(pokemonId?:number, pokemonName?:string){
    if(pokemonName === undefined && pokemonId == undefined){
      console.log('Cannot retrieve pokemon without an Id or name');
    }
    return this.httpClient.get<Pokemon>(`${this.pokeApiUrl}${pokemonId !== undefined? pokemonId : pokemonName }`);
  }
  getPokemonOfTheDay():Observable<Pokemon>{
    return this.retrievePokemon(this.getDayOfYear());
  }
  private getDayOfYear():number{
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  constructor(private httpClient:HttpClient) {
    this.retrieveAllPokemon();
   }
}
