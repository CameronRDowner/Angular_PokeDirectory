import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateEllipsis'
})
export class TruncateEllipsisStringPipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 12;
    if(value.length > maxLength){
      return value.substr(0, maxLength-1) + '...'
    }
    else{
      return value
    }
  }

}
