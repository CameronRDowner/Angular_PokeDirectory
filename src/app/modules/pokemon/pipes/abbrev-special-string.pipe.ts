import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrevSpecialString'
})
export class AbbrevSpecialStringPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value)
    if(value.indexOf("special")!== -1){
      let splitString = value.slice(0).split("-")
      console.log(splitString)
      splitString[0] = "Sp.";
      splitString[1] = splitString[1].charAt(0).toUpperCase() + splitString[1].slice(1);
      return splitString.join(" ")
    }
    else{
      return value
    }
  }

}
