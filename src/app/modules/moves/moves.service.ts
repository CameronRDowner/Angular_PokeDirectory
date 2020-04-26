import { Injectable } from '@angular/core';
import { Move } from './models/move';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovesService {
  private pokeApiUrl:string ='https://pokeapi.co/api/v2/move/';
  private movesCache:any;

  private cacheMove(move:Observable<Move>){
    let moveName = "";
    move.forEach(_move =>{  moveName = _move.name});
    this.movesCache[moveName] = move;
  }
  getMove(moveName:string):Observable<Move>{
    if(this.movesCache[moveName]){
      console.log("Returning cached value");
      return this.movesCache[moveName];
    }
    else{
      console.log("Returning value via API call");
      this.movesCache[moveName] = this.httpClient.get<Move>(`${this.pokeApiUrl}${moveName}`).pipe(
        shareReplay(1),
        catchError(err=>{
          delete this.movesCache[moveName];
          return EMPTY;
        }));
    }
  }

  constructor(private httpClient:HttpClient) {
    this.movesCache = {};
   }
}
