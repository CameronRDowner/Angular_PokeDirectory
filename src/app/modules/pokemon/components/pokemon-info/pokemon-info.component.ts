import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonAbility } from '../../models/pokemon-ability';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  @Input() pokemon : Pokemon
  @Input() abilities : Array<PokemonAbility>
  @Input() hiddenAbilities: Array<PokemonAbility>
  constructor() { }

  ngOnInit(): void {
  }

}
