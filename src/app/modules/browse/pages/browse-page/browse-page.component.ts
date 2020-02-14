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
  private initializeResultsInView(){
    if(this.browseService.searchTerm === ""){
      this.allResults = this.pokemonService.getAllPokemon();
      this.loadNextResultsInView();
    }
    else{
      this.searchList();
      this.loadNextResultsInView();
    }
    console.log(this.resultsInView)
  }
  private searchList(){
    let listToSearch; 
    if(this.browseService.searchList === 'allPokemon'){
      listToSearch = this.pokemonService.getAllPokemon();
    }
    let searchTerm = this.browseService.searchTerm;
    let searchResults = listToSearch.filter(item => 
      item.name.toLowerCase().includes(searchTerm));
      console.log(searchResults);
    this.allResults = searchResults;
  }
  loadNextResultsInView(){
    let amountToLoadIn = 20;
    let nextResults;
    while(this.allResultsOffset >= amountToLoadIn){
      nextResults.push(this.allResults[this.allResultsOffset])
      this.allResultsOffset ++;
    }
    console.log(nextResults.length);
    this.resultsInView = nextResults;
  }
  constructor(private pokemonService:PokemonService, private browseService:BrowseService) {
    this.allResultsOffset = 0;
    this.initializeResultsInView();

   }

  ngOnInit(): void {

  }

}
