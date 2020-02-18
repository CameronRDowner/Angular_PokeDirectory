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
  async setPokemonOfTheDay(){
    try{
      this.pokemonOfTheDay = await this.pokemonService.getPokemonOfTheDay();
    }
    catch(e){
      console.log(e);
    }
  }
  constructor(private pokemonService:PokemonService) {
    this.setPokemonOfTheDay()
   }
  ngOnInit() {
  }

}
