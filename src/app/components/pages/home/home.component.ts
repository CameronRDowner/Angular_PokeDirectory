import { Component, OnInit } from '@angular/core';
import {PokemonOfTheDayComponent} from '../../pokemon-of-the-day/pokemon-of-the-day.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
