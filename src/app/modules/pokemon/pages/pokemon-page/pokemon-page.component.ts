import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon/pokemon';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokemon:Pokemon;
  async setPokemon(){
    this.pokemon = await this.pokemonService.getPokemon(parseInt(this.router.url.substring(9)));
    console.log(this.pokemon);
  }
  constructor(private pokemonService:PokemonService, private router: Router) {
    this.setPokemon();
   }

  ngOnInit(): void {
  }

}
