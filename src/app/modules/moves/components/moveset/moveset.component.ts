import { Component, OnInit, Input } from '@angular/core';
import { PokemonMove } from '../../../../shared/models/pokemon-move/pokemon-move';
import { MovesService } from '../../moves.service';
import { Move } from '../../models/move/move';

@Component({
  selector: 'app-moveset',
  templateUrl: './moveset.component.html',
  styleUrls: ['./moveset.component.scss']
})
export class MovesetComponent implements OnInit {
  @Input() inputPokemonMoves:PokemonMove[];
  moveLists:Move;
  initializeMoveLists(){

  }
  setMoveLists(){
    this.inputPokemonMoves.
  }
  sortMoveListsByLevel(){

  }
  
  constructor(private movesService:MovesService) { }

  ngOnInit(): void {
  }

}
