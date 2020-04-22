import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { take, takeWhile } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';

import { Store, select } from '@ngrx/store';
import * as app from '../../../../app.state';
import * as browseSelectors from '../../state';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.container.html',
  styleUrls: ['./browse-page.container.scss']
})
export class BrowsePageContainer implements OnInit {
  componentActive: boolean;
  // private allResultsOffset:number;
  resultsInView:NamedAPIResource[];
  // allResults:NamedAPIResource[];
  allPokemon$:Observable<NamedAPIResource[]>;
  maxResultsPerPage: number;
  totalPages:number;
  currentPage:number;
  pokemonSortingButtons: RadioCluster;
  searchTerm: string;
  listToSearch: string;
  offsetStart: number;
  offsetEnd: number;
  initializeResultsInView(): void {
    
  }
  // private initializeResultsInView():void {
  //   this.pokemonService.getAllPokemon().pipe(takeWhile(()=> this.componentActive)).subscribe(
  //     (_allPokemon) => {
  //       this.allPokemon$ = _allPokemon.results
  //     },
  //     (error) => {
  //       console.log(error)
  //     },
  //     () => {
  //       if (this.searchTerm === "") {
  //         this.setAllResults(this.allPokemon$);
  //         this.setTotalPages();
  //         this.loadNextResultsInView();
  //       } 
  //       else {
  //         this.handleSearch();
  //       }
  //     });
  // }
  // setAllResults(newAllResults):void{
  //   this.allResults = newAllResults;
  // }
  setTotalPages():void{
    this.totalPages = (Math.ceil(this.resultsInView.length / this.maxResultsPerPage));
  }
  updateCurrentPage():void{
    this.currentPage = this.offsetStart / this.maxResultsPerPage;
  }
  // private searchList():void{
  //   let listToSearch:NamedAPIResource[]; 
  //   if(this.listToSearch === 'Pokemon'){
  //     listToSearch = this.allPokemon$;
  //   }
  //   let searchResults = listToSearch.filter(
  //     item => item.name.toLowerCase().includes(this.searchTerm)
  //     );
  //   this.resetAllResultsOffset();
  //   this.updateCurrentPage();
  //   this.setAllResults(searchResults);
  // }
  // handleSearch():void{
  //   this.searchList();
  //   this.loadNextResultsInView();
  //   this.setTotalPages();
  // }
  // loadPreviousResultsInView():void{
  //   const amountLeftToLoadIn = this.allResultsOffset;
  //   if(amountLeftToLoadIn === this.maxResultsPerPage){
  //     return
  //   }
  //   else{
  //     let amountToLoadIn:number;
  //     this.maxResultsPerPage > amountLeftToLoadIn ? amountToLoadIn = amountLeftToLoadIn : amountToLoadIn = this.maxResultsPerPage;
  //     this.allResultsOffset -= (amountToLoadIn + this.maxResultsPerPage); 
  //     let previousResults:NamedAPIResource[] = [];
  //     while(amountToLoadIn > 0){
  //       previousResults.push(this.allResults[this.allResultsOffset])
  //       amountToLoadIn -=1;
  //       this.allResultsOffset +=1;
  //     }
  //     this.resultsInView = previousResults;
  //   }
  //   this.updateCurrentPage(); 
  // }
  // loadNextResultsInView():void{
  //   const allResultsLastIndex = this.allResults.length;
  //   const amountLeftToLoadIn = (this.allResults.length) - this.allResultsOffset;
  //   if(this.allResultsOffset >= allResultsLastIndex){
  //     return
  //   }
  //   else{
  //     let amountToLoadIn:number;
  //   this.maxResultsPerPage > amountLeftToLoadIn ? amountToLoadIn = amountLeftToLoadIn : amountToLoadIn = this.maxResultsPerPage;
     
  //   let nextResults:NamedAPIResource[] = [];
  //   while(amountToLoadIn > 0){
  //     nextResults.push(this.allResults[this.allResultsOffset])
  //     amountToLoadIn -=1;
  //     this.allResultsOffset +=1;
  //   }
  //   this.resultsInView = nextResults;
  //   if(this.allResultsOffset === allResultsLastIndex){
  //     this.allResultsOffset = (this.totalPages * this.maxResultsPerPage);
  //   }
  //   }
  //   this.updateCurrentPage()
  // }
  // resetAllResultsOffset():void{
  //   this.allResultsOffset = 0;
  // }
  // handleSortButtonClick(buttonName):void{
  //   if(buttonName === "Id"){
  //     this.handleSortResultsById();
  //   }
  //   else if(buttonName === "Name"){
  //     this.handleSortResultsByName();
  //   }
  // }
  // // handleSortResultsById():void{
  // //   this.sortResultsById();
  // //   this.resetAllResultsOffset();
  // //   this.loadNextResultsInView();
  // //   this.updateCurrentPage();
  // // }
  // sortResultsById():void{
  //   this.allResults.sort((resultA, resultB)=>{
  //     let idA = parseInt(resultA.url.substring(34,resultA.url.length -1));
  //     let idB = parseInt(resultB.url.substring(34,resultB.url.length -1));
  //     return idA - idB;
  //   })
  // }
  // handleSortResultsByName():void{
  //   this.sortResultsByName();
  //   this.resetAllResultsOffset();
  //   this.loadNextResultsInView();
  //   this.updateCurrentPage();
  // }
  // sortResultsByName():void{
  //   this.allResults.sort((resultA, resultB)=>{
  //     let nameA = resultA.name.toLowerCase();
  //     let nameB = resultB.name.toLowerCase();
  //     if(nameA < nameB){ return -1;}
  //     if(nameA > nameB){ return 1;}
  //     return 0;
  //   })
  // }
  constructor(private pokemonService:PokemonService, private store: Store<app.State>) {
    this.offsetStart = 0;
    this.offsetEnd = this.offsetStart + this.maxResultsPerPage;
    this.maxResultsPerPage = 15;
    this.pokemonSortingButtons = new RadioCluster(["Id", "Name"], false);
    this.componentActive = true;
   }

  ngOnInit(): void {
    this.store.pipe(select(browseSelectors.getListToSearch), takeWhile(()=>this.componentActive)).subscribe(_listToSearch=> { this.listToSearch = _listToSearch });
    this.store.pipe(select(browseSelectors.getSearchTerm), takeWhile(()=>this.componentActive)).subscribe(_searchTerm=> { this.searchTerm = _searchTerm });
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }

}
