import { Component, OnInit } from '@angular/core';
import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';

import { Store, select } from '@ngrx/store';
import * as app from '../../../../app.state';
import * as browseSelectors from '../../state';
import * as browseActions from '../../state/browse.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.container.html',
  styleUrls: ['./browse.container.scss']
})
export class BrowseContainer implements OnInit {
  componentActive: boolean;
  resultsInView$:Observable<NamedAPIResource[]>;
  allPokemon$:Observable<NamedAPIResource[]>;
  totalPages$:Observable<number>;
  currentPage$:Observable<number>;
  pokemonSortingButtons: RadioCluster;
  startOffset$: Observable<number>;
  endOffset$: Observable<number>;
  alertModalMessage$:Observable<string>;
  alertModalVisible$:Observable<boolean>;
  loadNextPage(): void {
    this.store.dispatch(new browseActions.LoadNextPage());
  }
  handleLoadNextPage():void{
  let currentPage = null;
  let totalPages = null;
  this.currentPage$.pipe(takeWhile(()=>this.componentActive)).subscribe(_currentPage =>{ currentPage = _currentPage  })
  this.totalPages$.pipe(takeWhile(()=>this.componentActive)).subscribe(_totalPages =>{ totalPages = _totalPages  })
    if(currentPage !== totalPages){
      this.loadNextPage();
    }
  }
  loadPreviousPage(): void {
    this.store.dispatch(new browseActions.LoadPreviousPage());
  }
  handleLoadPreviousPage():void{
    let currentPage = null
    this.currentPage$.pipe(takeWhile(()=>this.componentActive)).subscribe(_currentPage =>{ currentPage = _currentPage  })
      if(currentPage !== 1){
        this.loadPreviousPage();
      }
    }
  closeModal():void{
    this.store.dispatch(new browseActions.CloseAlertModal())
  }
  handlePokemonSort(buttonName:string):void{
    if(buttonName === "Id"){
      this.sortPokemonById();
    }
    else if(buttonName === "Name"){
      this.sortPokemonByName();
    }
  }
  sortPokemonById():void{
    this.store.dispatch(new browseActions.SortPokemonById)
  }
  sortPokemonByName():void{
    this.store.dispatch(new browseActions.SortPokemonByName)
  }
  searchPokemon(searchTerm:string):void{
    this.store.dispatch(new browseActions.SearchPokemon(searchTerm))
  }
  setAllPokemonInView():void{
    this.store.dispatch(new browseActions.SetAllPokemonInView);
  }
  handleContainerLoad():void{
    this.route.queryParams.pipe(takeWhile(()=>this.componentActive)).subscribe(queryParams=>{
      if(queryParams.list === "pokemon"){
        (queryParams.name !== undefined ? this.searchPokemon(queryParams.name) : this.setAllPokemonInView())
      }
    })
  }
  constructor(private route: ActivatedRoute, private store: Store<app.State>) {
    this.pokemonSortingButtons = new RadioCluster(["Id", "Name"], false);
    this.componentActive = true;
   }
  ngOnInit(): void {
    this.allPokemon$ = this.store.pipe(select(browseSelectors.getAllPokemon));
    this.startOffset$ = this.store.pipe(select(browseSelectors.getStartOffset));
    this.endOffset$ = this.store.pipe(select(browseSelectors.getEndOffset));
    this.currentPage$ = this.store.pipe(select(browseSelectors.getCurrentPage));
    this.totalPages$ = this.store.pipe(select(browseSelectors.getTotalPages));
    this.resultsInView$ = this.store.pipe(select(browseSelectors.getResultsInView));
    this.alertModalVisible$ = this.store.pipe(select(browseSelectors.getAlertModalVisible));
    this.alertModalMessage$ = this.store.pipe(select(browseSelectors.getAlertModalMessage));
    this.allPokemon$.pipe(takeWhile(()=>this.componentActive)).subscribe(allPokemon=>{ 
      if(allPokemon === null){
        this.store.dispatch(new browseActions.LoadAllPokemon)
      }
    this.handleContainerLoad();
     })
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }

}
