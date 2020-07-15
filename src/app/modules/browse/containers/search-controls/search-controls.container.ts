import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as app from '../../../../app.state';
import * as browseActions from '../../state/browse.actions';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as browseSelectors from '../../state';
import { TextboxComponent } from 'src/app/shared/components/textbox/textbox.component';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.container.html'
})
export class SearchControlsContainer implements OnInit {
  componentActive: boolean;
  selectBoxOptions: string[];
  searchButtonIconClasses: string;
  searchTerm$: Observable<string>;
  currentList$: Observable<string>;
  @ViewChild(TextboxComponent) textbox:TextboxComponent;
  setCurrentList(_listToSearch): void{
    this.store.dispatch(new browseActions.SetCurrentList(_listToSearch));
  }
  setSearchTerm(_searchTerm:string): void {
    this.store.dispatch(new browseActions.SetSearchTerm(_searchTerm))
  }
  handleClearTextbox():void{
    this.clearSearchTerm();
    
  }
  clearSearchTerm():void {
    this.store.dispatch(new browseActions.ClearSearchTerm())
  }
  searchForPokemon(){
    this.store.dispatch(new browseActions.SearchPokemon())
  }
  handleSearchButtonClick(){
    this.setSearchTerm(this.textbox.textboxValue)
    this.searchForPokemon();
    this.openBrowsePage();
  }
  openBrowsePage(): void{
    this.router.navigate(['browse'])
  }
  loadAllPokemon():void{
    this.store.dispatch(new browseActions.LoadAllPokemon());
  }
  checkIfAllPokemonLoaded():boolean {
    let allPokemonLoaded = null;
    this.store.pipe(select(browseSelectors.getAllPokemon)).subscribe(allPokemon=>{
      if(allPokemon === null){
        allPokemonLoaded = false
      }
      else{
        allPokemonLoaded = true
      }
    })
    return allPokemonLoaded
  }
  constructor(private router: Router, private store: Store<app.State>) {
    this.componentActive = true;
    this.searchButtonIconClasses = "fa fa-search";
    this.selectBoxOptions = [
      "Pokemon"
    ]
  }

  ngOnInit(): void {
    this.currentList$ = this.store.pipe(select(browseSelectors.getCurrentList));
    this.searchTerm$ = this.store.pipe(select(browseSelectors.getSearchTerm));
    if(!this.checkIfAllPokemonLoaded()){
      this.loadAllPokemon();
    }
  }
  ngAfterViewInit(){
    this.searchTerm$.pipe(take(1)).subscribe(searchTerm=>{
      if(searchTerm !== null){
        this.textbox.setTextboxValue(searchTerm)
      }
    })
  }
  ngOnDestroy():void {
    this.componentActive = false;
  }

}
