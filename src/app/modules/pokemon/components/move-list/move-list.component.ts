import { Component, OnInit, Input } from '@angular/core';
import { PokemonMove } from '../../../../shared/models/pokemon-move';
import { Move } from '../../models/move';
import { takeUntil, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoveLists } from '../../models/move-lists';


@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() moveList:MoveLists[];
  constructor() {
    
  }
  ngOnInit(): void {
  
  }

}
