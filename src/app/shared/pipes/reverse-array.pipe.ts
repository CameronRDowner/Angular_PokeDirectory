import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
    transform(value) {
      if(value === null){
        return value
      }
      else{
        return value.slice().reverse();
      }
    }
  }