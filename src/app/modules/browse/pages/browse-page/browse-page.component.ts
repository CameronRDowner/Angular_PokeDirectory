import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { BrowseService } from '../../browse.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
  allPokemonSubscription:Subscription;
  private initializeResultsInView() {
    this.allPokemonSubscription = this.pokemonService.getAllPokemon().pipe(take(1)).subscribe(
      (_allPokemon) => {
        this.allPokemon = _allPokemon.results
      },
      (error) => {
        console.log(error)
      },
      () => {
        if (this.browseService.searchTerm === "") {
          this.allResults = this.allPokemon;
          this.setTotalPages();
          this.loadNextResultsInView();
        } else {
          this.handleSearch();
        }
      });
  }
  setTotalPages(){
    this.totalPages = (Math.ceil(this.allResults.length / this.maxResultsPerPage));
  }
  updateCurrentPage(){
    this.currentPage = this.allResultsOffset / this.maxResultsPerPage;
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
    this.resetAllResultsOffset();
    this.updateCurrentPage();
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
  resetAllResultsOffset(){
    this.allResultsOffset = 0;
  }
  handleSortResultsById(){
    this.sortResultsById();
    this.resetAllResultsOffset();
    this.loadNextResultsInView();
    this.updateCurrentPage();
  }
  sortResultsById(){
    this.allResults.sort((resultA, resultB)=>{
      let idA = parseInt(resultA.url.substring(34,resultA.url.length -1));
      let idB = parseInt(resultB.url.substring(34,resultB.url.length -1));
      return idA - idB;
    })
  }
  handleSortResultsByName(){
    this.sortResultsByName();
    this.resetAllResultsOffset();
    this.loadNextResultsInView();
    this.updateCurrentPage();
  }
  sortResultsByName(){
    this.allResults.sort((resultA, resultB)=>{
      let nameA = resultA.name.toLowerCase();
      let nameB = resultB.name.toLowerCase();
      if(nameA < nameB){ return -1;}
      if(nameA > nameB){ return 1;}
      return 0;
    })
  }
  constructor(private pokemonService:PokemonService, private browseService:BrowseService) {
    this.allResultsOffset = 0;
    this.maxResultsPerPage = 20;
    this.initializeResultsInView();
   }

  ngOnInit(): void {

  }
  ngOnDestroy(): void{
    this.allPokemonSubscription.unsubscribe();
  }

}
