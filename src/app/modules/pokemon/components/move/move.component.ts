import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../models/move';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {
  @Input() move:Move;
  @Input() index:number;
  getWrapperStyles(){
    let _backgroundColor = null;
    if(this.index % 2 === 0){
      _backgroundColor = "#D0D0D0"
    }
    else{
      _backgroundColor = "#E9E9E9"
    }
    return {
      backgroundColor: _backgroundColor
    }
  }
  constructor() {

   }
  ngOnInit(): void {
  }
}
