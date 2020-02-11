import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import { PokemonSprites } from '../../models/pokemon-sprites';
@Component({
  selector: 'app-pokemon-of-the-day',
  templateUrl: './pokemon-of-the-day.component.html',
  styleUrls: ['./pokemon-of-the-day.component.scss']
})
export class PokemonOfTheDayComponent implements OnInit {
  pokemonOfTheDay: Pokemon;
  constructor() { }
  ngOnInit() {
     
  }

}
