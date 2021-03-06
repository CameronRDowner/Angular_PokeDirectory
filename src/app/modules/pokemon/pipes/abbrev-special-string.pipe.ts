import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrevSpecialString'
})
export class AbbrevSpecialStringPipe implements PipeTransform {

  transform(value: string): string {
    if(value.indexOf("special")!== -1){
      let splitString = value.slice(0).split("-")
      splitString[0] = "Sp.";
      (splitString[1]==="attack")? splitString[1]='Atk' : splitString[1]='Def'
      return splitString.join(" ")
    }
    else{
      return value
    }
  }

}
