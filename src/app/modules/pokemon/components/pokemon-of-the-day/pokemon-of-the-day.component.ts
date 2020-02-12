import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon/pokemon';
import { PokemonService } from '../../pokemon.service';
@Component({
  selector: 'app-pokemon-of-the-day',
  templateUrl: './pokemon-of-the-day.component.html',
  styleUrls: ['./pokemon-of-the-day.component.scss']
})
export class PokemonOfTheDayComponent implements OnInit {
  pokemonOfTheDay: Pokemon;
  setPokemonOfTheDay(){
    this.pokemonService.getPokemonOfTheDay().forEach(pokemon => this.pokemonOfTheDay = pokemon);
  }
  constructor(private pokemonService:PokemonService) { }
  ngOnInit() {
    this.setPokemonOfTheDay();
  }

}
