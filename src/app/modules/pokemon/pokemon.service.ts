import { Injectable } from '@angular/core';
import { Observable, EMPTY} from 'rxjs';
import { NamedAPIResourceList } from '../../shared/models/named-apiresource-list';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon';
import { Move } from './models/move';
import { shareReplay, catchError } from 'rxjs/operators';
import { MoveInfo } from './models/move-info';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonApiUrl:string ='https://pokeapi.co/api/v2/pokemon/';
  private movesApiUrl:string = 'https://pokeapi.co/api/v2/move/';
  private pokemonLimit:string='?offset=0&limit=807';
  private movesCache:any;

  getAllPokemon():Observable<NamedAPIResourceList>{
    return this.httpClient.get<NamedAPIResourceList>(`${this.pokemonApiUrl}${this.pokemonLimit}`);
  }
  getPokemon(pokemonId?:number, pokemonName?:string):Observable<Pokemon>{
    if(pokemonName === undefined && pokemonId == undefined){
      console.log('Cannot retrieve pokemon without an Id or name');
    }
    return this.httpClient.get<Pokemon>(`${this.pokemonApiUrl}${pokemonId !== undefined? pokemonId : pokemonName }`);
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

  
  getMove(moveUrl:string):Observable<MoveInfo>{
    if(this.movesCache[moveUrl]){
      return this.movesCache[moveUrl];
    }
    else{
      this.movesCache[moveUrl] = this.httpClient.get<MoveInfo>(moveUrl).pipe(
        shareReplay(1),
        catchError(err=>{
          delete this.movesCache[moveUrl];
          return EMPTY;
        }));
    }
  }
  constructor(private httpClient:HttpClient) {
    this.movesCache = {};
   }
}
