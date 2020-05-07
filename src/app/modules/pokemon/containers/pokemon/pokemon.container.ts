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

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.scss']
})
export class PokemonContainer implements OnInit {
  componentActive: boolean;
  pokemon$:Observable<Pokemon>;
  pokemonSubscription:Subscription;
  orientationRadioCluster:RadioCluster;
  colorRadioCluster:RadioCluster;
  gameSelectOptions:string[];
  selectedGame$:Observable<string>;
  gameMoveLists$:Observable<MoveLists>;
  buildMoveLists(): MoveLists{
    let gameMoveLists = {} as MoveLists;
    this.pokemon$.pipe(takeWhile(()=>this.componentActive)).subscribe(pokemon => { pokemon.moves.map(move=>{ move.version_group_details.map(game =>{
      if(game.move_learn_method.name === "level-up" && game.version_group.name in gameMoveLists){
        gameMoveLists[game.version_group.name].push({levelLearnedAt: game.level_learned_at, move: "" })
      }
    })
    })
  })
    return gameMoveLists
  }
  setGameMoveLists(_gameMoveLists: MoveLists):void {
    this.store.dispatch(new pokemonActions.SetGameMoveLists(_gameMoveLists))
  }
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
    this.gameMoveLists$ = this.store.pipe(select(pokemonSelectors.getGameMoveLists));
    this.pokemon$ = this.store.pipe(select(pokemonSelectors.getPokemon));
    this.selectedGame$ = this.store.pipe(select(pokemonSelectors.getSelectedGame));
    this.setGameMoveLists(this.buildMoveLists())
  }
  ngOnDestroy(): void{
    this.pokemonSubscription.unsubscribe
    this.componentActive = false;
  }
}
