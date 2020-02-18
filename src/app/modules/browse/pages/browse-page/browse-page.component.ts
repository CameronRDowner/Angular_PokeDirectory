import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { BrowseService } from '../../browse.service';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
  private allResultsOffset:number;
  resultsInView:NamedAPIResource[];
  allResults:NamedAPIResource[];
  allPokemon:NamedAPIResource[];
  private async initializeResultsInView(){
    try{
      this.allPokemon = await this.pokemonService.getAllPokemon();
    }
    catch(e){
      console.log(e);
    }
    if(this.browseService.searchTerm === ""){
      this.allResults = this.allPokemon;
      this.loadNextResultsInView();
    }
    else{
      this.handleSearch();
    }
  }
  async retrieveAllPokemon(){
    try{
      this.allPokemon = await this.pokemonService.getAllPokemon();
    }
    catch(e){
      console.log(e);
    }
  }
  handleSearch(){
    this.searchList();
    this.loadNextResultsInView();
  }
  private searchList(){
    let listToSearch:NamedAPIResource[]; 
    if(this.browseService.searchList === 'allPokemon'){
      listToSearch = this.allPokemon;
    }
    let searchResults = listToSearch.filter(item => 
      item.name.toLowerCase().includes(this.browseService.searchTerm));
    this.allResultsOffset = 0;
    this.allResults = searchResults;
  }
  private loadPreviousResultsInView(){
    
  }
  private loadNextResultsInView(){
    const maxToLoadIn = 20;
    const amountLeftToLoadIn = this.allResults.length - this.allResultsOffset;
    let amountToLoadIn:number;
    maxToLoadIn > amountLeftToLoadIn ? amountToLoadIn = amountLeftToLoadIn : amountToLoadIn = maxToLoadIn; 
    let nextResults:NamedAPIResource[] = [];
    while(this.allResultsOffset < amountToLoadIn){
      nextResults.push(this.allResults[this.allResultsOffset])
      this.allResultsOffset ++;
    }
    this.resultsInView = nextResults;
    console.log(this.resultsInView);
  }
  constructor(private pokemonService:PokemonService, private browseService:BrowseService) {
    this.allResultsOffset = 0;
    this.initializeResultsInView();
   }

  ngOnInit(): void {

  }

}
