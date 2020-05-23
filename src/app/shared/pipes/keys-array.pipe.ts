import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysArray'
})
export class KeysArrayPipe implements PipeTransform {

  transform(value: any): any {
    console.log(Object.keys(value));
    return Object.keys(value);
  }

}
