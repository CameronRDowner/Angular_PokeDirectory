import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimNameString'
})
export class TrimNameStringPipe implements PipeTransform {

  transform(value: string): string {
    let indexOfDash = value.indexOf('-');
    if(indexOfDash === -1){
      return value
    }
    else{
      return value.slice(0,indexOfDash);
    }
  }

}
