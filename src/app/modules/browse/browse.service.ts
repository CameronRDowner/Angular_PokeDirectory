import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  searchTerm: string;
  searchList: string;
  constructor() { 
    this.searchTerm = "";
    this.searchList = "allPokemon";

  }
}