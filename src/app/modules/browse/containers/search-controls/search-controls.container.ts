import { Component, OnInit, Output } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { Router } from '@angular/router';
import { BrowseService } from '../../browse.service';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import * as app from '../../../../app.state';
import * as browse from '../../state';
import * as browseActions from '../../state/browse.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.container.html'
})
export class SearchControlsContainer implements OnInit {
  selectBoxOptions: string[];
  searchButtonIconClasses: string;
  handleSearchButtonClick(){
    
  }
  setSearchList(_searchList): void{
    console.log(_searchList);
    this.store.dispatch(new browseActions.SetSearchList(_searchList));
  }
  setSearchTerm(_searchTerm:string): void {
    console.log(_searchTerm);
    this.store.dispatch(new browseActions.SetSearchTerm(_searchTerm));
  }
  constructor(private store: Store<app.State>) {
    this.searchButtonIconClasses = "fas fa-search";
    this.selectBoxOptions = [
      "Pokemon"
    ]
  }

  ngOnInit(): void {
     this.store.pipe(select(browse.getSearchList)).subscribe(searchlist => console.log(searchlist));
     this.store.pipe(select(browse.getSearchTerm)).subscribe(searchterm=> console.log(searchterm));
  }

}
