import { Component, OnInit, Input } from '@angular/core';
import { EncounterLists } from '../../models/encounter-lists';
import { RadioCluster } from 'src/app/shared/models/radio-cluster/radio-cluster';
import { GamesToGameHelper } from '../../models/games-to-game-helper';
import { EncounterLocation } from '../../models/encounter-location';

@Component({
  selector: 'app-catch-location',
  templateUrl: './catch-location.component.html',
  styleUrls: ['./catch-location.component.scss']
})
export class CatchLocationComponent implements OnInit {
  @Input() encounterLocationList: Array<EncounterLocation>;
  selectedGameHelper:GamesToGameHelper;
  constructor() {
    this.selectedGameHelper = new GamesToGameHelper();
   }
   ngOnChanges():void{
     
   }
  ngOnInit(): void {
    
  }

}
