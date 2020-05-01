import { Component, OnInit, Input } from '@angular/core';
import { PokemonStat } from '../../models/pokemon-stat';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.scss']
})
export class StatListComponent implements OnInit {
  @Input() statList: PokemonStat[]
  getBaseStatTotal(): number{
    return this.statList.reduce((baseStatTotal, stat)=> baseStatTotal + stat.base_stat, 0)
  } 
  constructor() { }
  
  ngOnInit(): void {
  }

}
