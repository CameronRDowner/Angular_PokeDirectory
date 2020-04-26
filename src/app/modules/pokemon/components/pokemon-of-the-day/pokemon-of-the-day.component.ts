import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import { PokemonService } from '../../pokemon.service';
import { Subscription } from 'rxjs';
import { take} from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-of-the-day',
  templateUrl: './pokemon-of-the-day.component.html',
  styleUrls: ['./pokemon-of-the-day.component.scss']
})
export class PokemonOfTheDayComponent implements OnInit {
  pokemonOfTheDay: Pokemon;
  pokemonOfTheDaySubscription: Subscription;
  setPokemonOfTheDay(){
    this.pokemonOfTheDaySubscription = this.pokemonService.getPokemonOfTheDay().pipe(take(1))
    .subscribe( 
      (_pokemonOfTheDay)=>{ this.pokemonOfTheDay = _pokemonOfTheDay },
      (error) => { console.log(error) }
      );
  }
  openPokemonPage(){
    this.router.navigate(['/pokemon', this.pokemonOfTheDay.id]);
  }
  constructor(private pokemonService:PokemonService, private router: Router) {
   }
  ngOnInit() {
    this.setPokemonOfTheDay();
  }
  ngOnDestroy(): void {
    this.pokemonOfTheDaySubscription.unsubscribe();
  }
}
