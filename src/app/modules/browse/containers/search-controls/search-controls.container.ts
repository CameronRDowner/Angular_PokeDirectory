import { Component, OnInit, Output } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import * as app from '../../../../app.state';
import * as browse from '../../state';
import * as browseActions from '../../state/browse.actions';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.container.html'
})
export class SearchControlsContainer implements OnInit {
  componentActive: boolean;
  selectBoxOptions: string[];
  searchButtonIconClasses: string;
  setCurrentList(_listToSearch): void{
    this.store.dispatch(new browseActions.SetCurrentList(_listToSearch));
  }
  setSearchTerm(_searchTerm:string): void {
    this.store.dispatch(new browseActions.SetSearchTerm(_searchTerm));
  }
  openBrowsePage(): void{
    this.router.navigate(['browse'])
  }
  constructor(private router: Router, private store: Store<app.State>) {
    this.componentActive = true;
    this.searchButtonIconClasses = "fas fa-search";
    this.selectBoxOptions = [
      "Pokemon"
    ]
  }

  ngOnInit(): void {
     this.store.pipe(select(browse.getCurrentList), takeWhile(()=>this.componentActive)).subscribe(searchlist => console.log(searchlist));
     this.store.pipe(select(browse.getSearchTerm), takeWhile(()=>this.componentActive)).subscribe(searchterm=> console.log(searchterm));
  }
  ngOnDestroy():void {
    this.componentActive = false;
  }

}
