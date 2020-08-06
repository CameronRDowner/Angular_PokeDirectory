import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatPercent'
})
export class ConcatPercentStringPipe implements PipeTransform {

  transform(value: string): string {
    if(value === null || value === undefined){
      return value;
    }
    else{
      return `${value}%`
    }
  }

}
