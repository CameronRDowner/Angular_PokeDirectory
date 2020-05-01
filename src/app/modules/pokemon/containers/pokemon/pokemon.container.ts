import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RadioCluster } from 'src/app/shared/models/radio-cluster/radio-cluster';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.container.html',
  styleUrls: ['./pokemon.container.scss']
})
export class PokemonContainer implements OnInit {
  pokemon:Pokemon;
  pokemonSubscription:Subscription;
  orientationRadioCluster:RadioCluster;
  colorRadioCluster:RadioCluster;
  gameSelectOptions:string[];
  setPokemon(){
  this.pokemonSubscription = this.pokemonService.getPokemon(parseInt(this.router.url.substring(9))).pipe(take(1)).subscribe(_pokemon=>{ this.pokemon = _pokemon });
  }
  constructor(private pokemonService:PokemonService, private router: Router) {
    this.setPokemon();
    this.gameSelectOptions = ["Pokemon Shield", "Pokemon Sword"];
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    this.pokemonSubscription.unsubscribe
  }
}
