import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-apiresource';
import { take, takeWhile } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';

import { Store, select } from '@ngrx/store';
import * as app from '../../../../app.state';
import * as browseSelectors from '../../state';
import * as browseActions from '../../state/browse.actions';

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
  currentList$: Observable<string>;
  startOffset$: Observable<number>;
  endOffset$: Observable<number>;
  alertModalMessage$:Observable<string>;
  alertModalVisible$:Observable<boolean>;
  initializeResultsInView(): void {
    this.resultsInView$.pipe(takeWhile(()=>this.componentActive)).subscribe(resultsInView=>{
    this.currentList$.pipe(takeWhile(()=>this.componentActive)).subscribe(currentList => {
      if(currentList === "Pokemon" && resultsInView === null){
        this.setResultsInView(this.allPokemon$);
      }
    })
  })
  }
  setResultsInView(_resultsInView$:Observable<NamedAPIResource[]>): void {
    _resultsInView$.pipe(takeWhile(()=>this.componentActive)).subscribe(_resultsInView=>{
      this.store.dispatch(new browseActions.SetResultsInView(_resultsInView));
    })
  }
  loadNextPage(): void {
    this.store.dispatch(new browseActions.LoadNextPage());
  }
  loadPreviousPage(): void {
    this.store.dispatch(new browseActions.LoadPreviousPage());
  }
  initializeOffsets(): void {
    this.store.dispatch(new browseActions.InitializeOffsets());
  }
  handlePokemonSort(buttonName):void{
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
  constructor(private pokemonService:PokemonService, private store: Store<app.State>) {
    this.pokemonSortingButtons = new RadioCluster(["Id", "Name"], false);
    this.componentActive = true;
   }

  ngOnInit(): void {
    this.currentList$ = this.store.pipe(select(browseSelectors.getCurrentList));
    this.allPokemon$ = this.store.pipe(select(browseSelectors.getAllPokemon));
    this.startOffset$ = this.store.pipe(select(browseSelectors.getStartOffset));
    this.endOffset$ = this.store.pipe(select(browseSelectors.getEndOffset));
    this.currentPage$ = this.store.pipe(select(browseSelectors.getCurrentPage));
    this.totalPages$ = this.store.pipe(select(browseSelectors.getTotalPages));
    this.resultsInView$ = this.store.pipe(select(browseSelectors.getResultsInView), takeWhile(()=>this.componentActive));
    this.allPokemon$.pipe(takeWhile(()=>this.componentActive)).subscribe(allPokemon=>{ 
      if(allPokemon === null){
        this.store.dispatch(new browseActions.LoadAllPokemon)
      }
      else{
        this.initializeResultsInView()
      }
     })
    this.initializeOffsets();
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }

}
