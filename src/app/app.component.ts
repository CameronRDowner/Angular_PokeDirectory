import { Component } from '@angular/core';
import * as app from './app.state';
import { Store } from '@ngrx/store';
import * as browseActions from './modules/browse/state/browse.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pokedex';

  constructor(private store: Store<app.State>){}

  ngOnInit(){
    this.store.dispatch(new browseActions.LoadAllPokemon());
  }
}
