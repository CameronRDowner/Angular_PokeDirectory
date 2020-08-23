import { Component, OnInit, Input } from '@angular/core';
import { EncounterLists } from '../../models/encounter-lists';
import { RadioCluster } from 'src/app/shared/models/radio-cluster/radio-cluster';
import { SelectedGameHelper } from '../../models/selected-game-helper';

@Component({
  selector: 'app-catch-location',
  templateUrl: './catch-location.component.html',
  styleUrls: ['./catch-location.component.scss']
})
export class CatchLocationComponent implements OnInit {
  @Input() selectedGames: string;
  @Input() encounterLists: EncounterLists;
  buttonNames:Array<string>;
  selectedGameHelper:SelectedGameHelper;
  selectedGame:string;
  setGameButtonNames():void{
    this.buttonNames = [
      ...this.selectedGameHelper[this.selectedGames]
    ]
  }
  setSelectedGame(_selectedGame:string):void{
    this.selectedGame = _selectedGame;
  }
  constructor() {
    this.buttonNames = []
    this.selectedGameHelper = new SelectedGameHelper();
   }
   ngOnChanges():void{
     if(this.selectedGames !== null){
      this.setGameButtonNames();
      this.setSelectedGame(this.buttonNames[0]);
     }
   }
  ngOnInit(): void {
    
  }

}
