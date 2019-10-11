import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pokemon} from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonOfTheDayService {
  pokeApiUrl:string ='https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) { }
  private getDayOfYear():number{
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  getPokemonOfTheDay():Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApiUrl}/${this.getDayOfYear()}`);
  }

}
