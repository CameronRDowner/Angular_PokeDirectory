import { Component, OnInit, Input } from '@angular/core';
import { PokemonAbility } from '../../models/pokemon-ability';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit { 
  @Input() pokemonAbility : PokemonAbility;
  constructor() {  }

  ngOnInit(): void {

  }

}
