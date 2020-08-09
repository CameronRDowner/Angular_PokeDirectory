import { Pipe, PipeTransform } from '@angular/core';
import { Move } from '../models/move';

@Pipe({
  name: 'sortByLevel'
})
export class SortByLevelArrayPipe implements PipeTransform {

  transform(value: Array<Move>): Array<Move> {
    if(value === undefined || value === null){
      return value;
    }
    else{
      return value.slice().sort((moveA, moveB)=> moveA.levelLearnedAt - moveB.levelLearnedAt)
    }
  }

}
