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
  barColors : StatBarColors;
  constructor() {
    this.barColors = new StatBarColors()
   }
  getBarStyles():any{
    let styles = {
      'background-color' : this.barColors[this.stat.stat.name],
      'width' : `${Math.round((255/this.stat.base_stat)*10)}%`
    }
    console.log('ran')
    return styles;      
  }
  ngOnInit(): void {
  }

}
