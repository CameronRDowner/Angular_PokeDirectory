import { Component, OnInit } from '@angular/core';
import {PokemonOfTheDayService} from '../../services/pokemon-of-the-day.service';
import {Pokemon} from '../../models/pokemon';
@Component({
  selector: 'app-pokemon-of-the-day',
  templateUrl: './pokemon-of-the-day.component.html',
  styleUrls: ['./pokemon-of-the-day.component.scss']
})
export class PokemonOfTheDayComponent implements OnInit {
  pokemonOfTheDay: Pokemon;
  constructor(private pokemonOfTheDayService: PokemonOfTheDayService) { }

  ngOnInit() {
    
  }

}
