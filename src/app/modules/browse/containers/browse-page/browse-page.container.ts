import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { take, takeWhile } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';

import { Store, select } from '@ngrx/store';
import * as app from '../../../../app.state';
import * as browseSelectors from '../../state';
import * as browseActions from '../../state/browse.actions';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.container.html',
  styleUrls: ['./browse-page.container.scss']
})
export class BrowsePageContainer implements OnInit {
  componentActive: boolean;
  resultsInView:NamedAPIResource[];
  allPokemon:NamedAPIResource[];
  maxResultsPerPage: number;
  totalPages:number;
  currentPage:number;
  pokemonSortingButtons: RadioCluster;
  searchTerm: string;
  listToSearch: string;
  startOffset: number;
  endOffset: number;
  initializeResultsInView(): void {
    if(this.searchTerm === ""){
      this.setResultsInView(this.allPokemon);
    }
    else{
      
    }
  }
  setTotalPages():void{
    this.totalPages = (Math.ceil(this.resultsInView.length / this.maxResultsPerPage));
  }
  updateCurrentPage():void{
    this.currentPage = this.startOffset / this.maxResultsPerPage;
  }
  private searchList(list:NamedAPIResource[]):NamedAPIResource[]{ 
    return list.filter(
      item => item.name.toLowerCase().includes(this.searchTerm)
      );
  }
  handleSearch():void{
    if(this.listToSearch === "Pokemon"){
      this.setResultsInView(this.searchList(this.allPokemon))
    }
    this.initializeOffsets();
    this.updateCurrentPage();
    this.setTotalPages();
    this.clearSearchTerm();
  }
  setResultsInView(_resultsInView): void {
    this.resultsInView = _resultsInView; 
  }
  initializeOffsets(): void {
    this.startOffset = 0;
    this.endOffset = this.maxResultsPerPage;
  }
  clearSearchTerm(): void {
    this.store.dispatch(new browseActions.ClearSearchTerm());
  }
  handleLoadNextResults(): void {
    this.loadNextResultsPage();
    this.updateCurrentPage();
  }
  handleLoadPreviousResults(){
    this.loadPreviousResultsPage();
    this.updateCurrentPage();
  }
  loadNextResultsPage(): void {
    if(this.currentPage !== this.totalPages){
      this.startOffset = this.endOffset;
      this.endOffset += this.maxResultsPerPage;
    }
  }
  loadPreviousResultsPage(): void {
    if(this.currentPage !== 0){
      this.endOffset = this.startOffset;
      this.startOffset -= this.maxResultsPerPage;
    }
  }
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
    this.initializeOffsets();
    this.maxResultsPerPage = 15;
    this.pokemonSortingButtons = new RadioCluster(["Id", "Name"], false);
    this.componentActive = true;
   }

  ngOnInit(): void {
    this.store.pipe(select(browseSelectors.getListToSearch), takeWhile(()=>this.componentActive)).subscribe(_listToSearch => { this.listToSearch = _listToSearch });
    this.store.pipe(select(browseSelectors.getSearchTerm), takeWhile(()=>this.componentActive)).subscribe(_searchTerm => { this.searchTerm = _searchTerm });
    this.store.pipe(select(browseSelectors.getAllPokemon), takeWhile(()=> this.componentActive)).subscribe(_allPokemon => { 
      this.allPokemon = _allPokemon
      console.log(this.allPokemon)
      this.initializeResultsInView()
    });
    this.initializeOffsets();
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }

}
