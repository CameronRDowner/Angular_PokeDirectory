import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonStat } from '../../models/pokemon-stat';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatListComponent implements OnInit {
  @Input() statList: PokemonStat[];
  baseStatTotal: number;
  initializeBaseStatTotal(): void{
    this.baseStatTotal = this.statList.reduce((baseStatTotal, stat)=> baseStatTotal + stat.base_stat, 0)
  } 
  constructor() { }
  ngOnChanges():void{
    this.initializeBaseStatTotal();
  }
  ngOnInit(): void {
  }

}
