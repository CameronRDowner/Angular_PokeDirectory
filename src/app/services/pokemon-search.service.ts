import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from '../models/named-apiresource-list';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {
  pokeApiUrl:string ='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964';
  getAllPokemon():Observable<NamedAPIResourceList>{
    return this.httpClient.get<NamedAPIResourceList>(this.pokeApiUrl);
  }
  constructor(private httpClient:HttpClient) { }
}
