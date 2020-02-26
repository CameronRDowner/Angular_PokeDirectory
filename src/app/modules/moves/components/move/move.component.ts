import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move/move';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {
  @Input() levelLearnedAt:number;
  @Input() inputMove:Observable<Move>;
  move:Move;
  initializeMove(){
    this.inputMove.pipe(take(1)).subscribe(_move=> this.move = _move);
  }
  constructor() {

   }
  ngOnInit(): void {
    this.initializeMove()
  }
}
