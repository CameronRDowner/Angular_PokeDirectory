import { Component, OnInit, Input } from '@angular/core';
import { PokemonStat } from '../../models/pokemon-stat';
import { StatBarColors } from '../../models/stat-bar-colors/stat-bar-colors';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() stat : PokemonStat;
  @Input() statIndex: number;
  barColors : StatBarColors;
  constructor() {
    this.barColors = new StatBarColors()
   }
  getBarStyles():any{
    return{
      'background-color' : this.barColors[this.stat.stat.name],
      'width' : `${Math.round((this.stat.base_stat/255)*100)}%`
    }     
  }
  getWrapperStyles():any{
    let wrapperColor = null;
    if(this.statIndex % 2 === 0){
      wrapperColor = "#D0D0D0"
    }
    else{
      wrapperColor = "#E9E9E9"
    }
    return {
      'background-color' : wrapperColor
    }
  }
  getEstimatedStat(level:number, iV?:number, eV?:number):number{
    if(iV === undefined || eV === undefined){
      //this is a harmful nature effect (-10%)
      const natureEffect = .9;
      return Math.floor(((((2*this.stat.base_stat)*level)/100)+5)*natureEffect)
    }
    else{
      //this is a helpful nature effect (+10%)
      const natureEffect = 1.1;
      return Math.floor((((((2*this.stat.base_stat)+iV+(eV/4))*level)/100)+5)*natureEffect)
    }
  }
  getEstimatedHealth(level:number, iV?:number, eV?:number){
    if(iV === undefined || eV === undefined){
      return Math.floor(((((this.stat.base_stat)*2)*level)/100)+level+10)
    }
    else{
      return Math.floor(((((this.stat.base_stat)*2+iV+(eV/4))*level)/100)+level+10)
    }
  }
  ngOnInit(): void {
    console.log(this.statIndex)
  }

}
