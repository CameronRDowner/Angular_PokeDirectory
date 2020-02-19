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
  maxResultsPerPage: number;
  totalPages:number;
  currentPage:number;
  private async initializeResultsInView(){
    try{
      this.allPokemon = await this.pokemonService.getAllPokemon();
    }
    catch(e){
      console.log(e);
    }
    if(this.browseService.searchTerm === ""){
      this.allResults = this.allPokemon;
      this.setTotalPages();
      this.loadNextResultsInView();
    }
    else{
      this.handleSearch();
    }
  }
  setTotalPages(){
    this.totalPages = (Math.ceil(this.allResults.length / this.maxResultsPerPage));
  }
  updateCurrentPage(){
    this.currentPage = this.allResultsOffset / this.maxResultsPerPage;
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
    this.setTotalPages();
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
  loadPreviousResultsInView(){
    const amountLeftToLoadIn = this.allResultsOffset;
    if(amountLeftToLoadIn === this.maxResultsPerPage){
      return
    }
    else{
      let amountToLoadIn:number;
      this.maxResultsPerPage > amountLeftToLoadIn ? amountToLoadIn = amountLeftToLoadIn : amountToLoadIn = this.maxResultsPerPage;
      this.allResultsOffset -= (amountToLoadIn + this.maxResultsPerPage); 
      let previousResults:NamedAPIResource[] = [];
      while(amountToLoadIn > 0){
        previousResults.push(this.allResults[this.allResultsOffset])
        amountToLoadIn -=1;
        this.allResultsOffset +=1;
      }
      this.resultsInView = previousResults;
    }
    this.updateCurrentPage(); 
  }
  loadNextResultsInView(){
    const allResultsLastIndex = this.allResults.length;
    const amountLeftToLoadIn = (this.allResults.length) - this.allResultsOffset;
    if(this.allResultsOffset >= allResultsLastIndex){
      return
    }
    else{
      let amountToLoadIn:number;
    this.maxResultsPerPage > amountLeftToLoadIn ? amountToLoadIn = amountLeftToLoadIn : amountToLoadIn = this.maxResultsPerPage;
     
    let nextResults:NamedAPIResource[] = [];
    while(amountToLoadIn > 0){
      nextResults.push(this.allResults[this.allResultsOffset])
      amountToLoadIn -=1;
      this.allResultsOffset +=1;
    }
    this.resultsInView = nextResults;
    if(this.allResultsOffset === allResultsLastIndex){
      this.allResultsOffset = (this.totalPages * this.maxResultsPerPage);
    }
    }
    this.updateCurrentPage()
  }
  sortResultsById(){

  }
  sortResultsByName(){
    
  }
  constructor(private pokemonService:PokemonService, private browseService:BrowseService) {
    this.allResultsOffset = 0;
    this.maxResultsPerPage = 20;
    this.initializeResultsInView();
   }

  ngOnInit(): void {

  }

}
