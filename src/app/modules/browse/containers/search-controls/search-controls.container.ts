import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as app from '../../../../app.state';
import { Store} from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
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
  textboxWidth:string;
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
  checkIfMobileWidth():boolean{
    if(window.innerWidth <= 700){
      return true;
    }
    else{
      return false;
    }
  }
  constructor(private router: Router, private route:ActivatedRoute, private store: Store<app.State>) {
    this.componentActive = true;
    this.searchButtonIconClasses = "fa fa-search";
    this.selectBoxOptions = [
      "pokemon"
    ]
  }

  ngOnInit(): void {
  }
  ngOnDestroy():void {
    this.componentActive = false;
  }

}
