import { Component, OnInit, Input } from '@angular/core';
import { PokemonSprites } from '../../models/pokemon-sprites';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';
@Component({
  selector: 'app-sprites',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.scss']
})
export class SpritesComponent implements OnInit {
  @Input() sprites:PokemonSprites;
  spriteInView:string;
  orientationToggled: string;
  colorToggled: string;
  orientationRadioCluster: any;
  colorRadioCluster: any;
  handleOrientationButtonClick(buttonClicked):void {
    if(buttonClicked === "Front"){
      
    }
    else {

    }
  }
  setColorToggled(_colorToggled): void{
    this.colorToggled = _colorToggled;
  }
  setOrientationToggled(_orientationToggled):void {
    this.orientationToggled = _orientationToggled;
  } 
  constructor() {
    this.orientationRadioCluster = new RadioCluster(["Front", "Back"], true);
    this.colorRadioCluster = new RadioCluster(["Default", "Shiny"], true);
    this.orientationToggled = "Front";
    this.colorToggled = "Default";
   }

  ngOnInit(): void {
    this.spriteInView = this.sprites.front_default;
  }

}
