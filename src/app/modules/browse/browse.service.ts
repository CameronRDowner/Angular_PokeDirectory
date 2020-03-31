import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {
  sortingButtons: Object;
  searchTerm: string;
  searchList: string;
  constructor() { 
    this.searchTerm = "";
    this.searchList = "allPokemon";
    this.sortingButtons = {
      pokemon: [ "Id", "Name" ]
    }
  }
}
