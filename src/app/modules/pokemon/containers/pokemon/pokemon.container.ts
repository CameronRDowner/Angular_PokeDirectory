import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { RadioCluster } from 'src/app/shared/models/radio-cluster/radio-cluster';
import { MoveLists } from '../../models/move-lists';

import * as pokemonActions from '../../state/pokemon.actions';
import * as pokemonSelectors from '../../state/';
import { Store, select } from '@ngrx/store';
import { LocationAreaEncounter } from '../../models/location-area-encounter';
import { PokemonAbility } from '../../models/pokemon-ability';
import { takeWhile } from 'rxjs/operators';

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
  abilities$:Observable<Array<PokemonAbility>>
  hiddenAbilities$:Observable<Array<PokemonAbility>>
  navigateBackBrowsePage(): void{
    this.location.back();
  }
  setSelectedGame(_selectedGame:string){
    this.store.dispatch(new pokemonActions.SetSelectedGame(_selectedGame));
  }
  getPokemon(id:number):void{
    this.store.dispatch(new pokemonActions.LoadPokemon(id));
  }
  retrievePokemonId(): number {
    let pokemonId = undefined;
    this.route.params.pipe(takeWhile(()=>this.componentActive)).subscribe(params=>{
      pokemonId = params.id
    })
    return pokemonId
  }
  constructor(private route: ActivatedRoute, private location: Location, private store: Store<pokemonSelectors.State>) {
    this.componentActive = true;
   }
  ngOnInit(): void {
    this.getPokemon(this.retrievePokemonId());
    this.moveLists$ = this.store.pipe(select(pokemonSelectors.getMoveLists));
    this.pokemon$ = this.store.pipe(select(pokemonSelectors.getPokemon));
    this.selectedGame$ = this.store.pipe(select(pokemonSelectors.getSelectedGame));
    this.gamesFeatured$ = this.store.pipe(select(pokemonSelectors.getGamesFeatured));
    this.encounters$ = this.store.pipe(select(pokemonSelectors.getEncounters));
    this.abilities$ = this.store.pipe(select(pokemonSelectors.getAbilities));
    this.hiddenAbilities$ = this.store.pipe(select(pokemonSelectors.getHiddenAbilities));
    this.encounters$.subscribe(encounters=>{
      console.log(encounters)
    })
  }
  ngOnDestroy(): void{
    this.componentActive = false;
  }
}
