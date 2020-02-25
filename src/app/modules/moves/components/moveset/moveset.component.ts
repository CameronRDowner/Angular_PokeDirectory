import { Component, OnInit, Input } from '@angular/core';
import { PokemonMove } from '../../../../shared/models/pokemon-move/pokemon-move';
import { Pokemon } from 'src/app/modules/pokemon/models/pokemon/pokemon';
import { MovesService } from '../../moves.service';

@Component({
  selector: 'app-moveset',
  templateUrl: './moveset.component.html',
  styleUrls: ['./moveset.component.scss']
})
export class MovesetComponent implements OnInit {
  @Input() inputPokemonMoves:PokemonMove;
  
  constructor(private movesService:MovesService) { }

  ngOnInit(): void {
  }

}
