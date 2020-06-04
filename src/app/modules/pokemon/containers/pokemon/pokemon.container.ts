import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';
import { take, takeWhile } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { RadioCluster } from 'src/app/shared/models/radio-cluster/radio-cluster';
import { MoveLists } from '../../models/move-lists';

import * as pokemonActions from '../../state/pokemon.actions';
import * as pokemonSelectors from '../../state/';
import { Store, select } from '@ngrx/store';
import { LocationAreaEncounter } from '../../models/location-area-encounter';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.scss']
})
export class PokemonContainer implements OnInit {
  componentActive: boolean;
  pokemon$:Observable<Pokemon>;
  orientationRadioCluster:RadioCluster;
  colorRadioCluster:RadioCluster;
  selectedGame$:Observable<string>;
  moveLists$:Observable<MoveLists>;
  gamesFeatured$:Observable<Array<string>>;
  encounters$:Observable<Array<LocationAreaEncounter>>
  setSelectedGame(_selectedGame:string){
    this.store.dispatch(new pokemonActions.SetSelectedGame(_selectedGame));
  }
  constructor(private router: Router, private store: Store<pokemonSelectors.State>) {
  
   }
  retrievePokemonId(): number {
    return parseInt(this.router.url.split('/')[2])
  }
  ngOnInit(): void {
    
    this.componentActive = true;
    this.store.dispatch(new pokemonActions.LoadPokemon(this.retrievePokemonId()));
    this.moveLists$ = this.store.pipe(select(pokemonSelectors.getMoveLists));
    this.pokemon$ = this.store.pipe(select(pokemonSelectors.getPokemon));
    this.selectedGame$ = this.store.pipe(select(pokemonSelectors.getSelectedGame));
    this.gamesFeatured$ = this.store.pipe(select(pokemonSelectors.getGamesFeatured));
    this.encounters$ = this.store.pipe(select(pokemonSelectors.getEncounters));
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }
}
