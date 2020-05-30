import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysArray'
})
export class KeysArrayPipe implements PipeTransform {

  transform(value: any): any {
    return Object.keys(value);
  }

}
