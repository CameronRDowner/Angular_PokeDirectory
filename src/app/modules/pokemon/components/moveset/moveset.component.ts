import { Component, OnInit, Input } from '@angular/core';
import { PokemonMove } from '../../../../shared/models/pokemon-move';
import { Move } from '../../models/move';
import { takeUntil, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-moveset',
  templateUrl: './moveset.component.html',
  styleUrls: ['./moveset.component.scss']
})
export class MovesetComponent implements OnInit {
  @Input() moveList:PokemonMove[];
  constructor() {
    
  }
  ngOnInit(): void {
  
  }

}
