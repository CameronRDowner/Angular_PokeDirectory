import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as app from '../../../../app.state';
import * as browseActions from '../../state/browse.actions';
import { Store, select } from '@ngrx/store';
import { take, takeWhile } from 'rxjs/operators';
import * as browseSelectors from '../../state';
import { TextboxComponent } from 'src/app/shared/components/textbox/textbox.component';
import { SelectBoxComponent } from 'src/app/shared/components/select-box/select-box.component';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.container.html'
})
export class SearchControlsContainer implements OnInit {
  componentActive: boolean;
  selectBoxOptions: string[];
  searchButtonIconClasses: string;
  @ViewChild(TextboxComponent) textbox:TextboxComponent;
  @ViewChild(SelectBoxComponent) selectBox:SelectBoxComponent;
  getQueryParamName():string{
    let queryParamName = undefined;
    this.route.queryParams.pipe(takeWhile(()=>this.componentActive)).subscribe(queryParams=>{
      if(queryParams.name !== undefined){
        queryParamName = queryParams.name
      }
    })
    return queryParamName
  }
  setAllPokemonInView():void{
    this.store.dispatch(new browseActions.SetAllPokemonInView)
  }

  handleClearedTextbox():void{
    this.navigateBrowseAllPokemon();
  }
  navigateBrowseAllPokemon():void{
    this.router.navigate(['browse'], {queryParams:{ list: 'pokemon'}})
  }
  handleSearchButtonClick(){
    const textboxValue = this.textbox.textboxValue;
    const selectedList = this.selectBox.selectedOption;
    if(textboxValue !== ""){
      this.openBrowsePage(selectedList, textboxValue);
    }
  }
  openBrowsePage(_list:string, searchTerm:string): void{
    this.router.navigate(['browse'], {queryParams:{ list:_list, name: searchTerm}})
  }
  loadAllPokemon():void{
    this.store.dispatch(new browseActions.LoadAllPokemon());
  }
  checkIfAllPokemonLoaded():boolean {
    let allPokemonLoaded = null;
    this.store.pipe(takeWhile(()=>this.componentActive), select(browseSelectors.getAllPokemon)).subscribe(allPokemon=>{
      if(allPokemon === null){
        allPokemonLoaded = false
      }
      else{
        allPokemonLoaded = true
      }
    })
    return allPokemonLoaded
  }
  initializeTextboxValue():void{
     this.route.queryParams.pipe(takeWhile(()=>this.componentActive)).subscribe(queryParams=>{
       if(queryParams.name !== undefined){
         this.textbox.setTextboxValue(queryParams.name)
       }
     })
  }
  constructor(private router: Router, private route:ActivatedRoute, private store: Store<app.State>) {
    this.componentActive = true;
    this.searchButtonIconClasses = "fa fa-search";
    this.selectBoxOptions = [
      "pokemon"
    ]
  }

  ngOnInit(): void {
    if(!this.checkIfAllPokemonLoaded()){
      this.loadAllPokemon();
    }
    this.initializeTextboxValue();
  }
  ngAfterViewInit(){
    
  }
  ngOnDestroy():void {
    this.componentActive = false;
  }

}
