import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonSprites } from '../../models/pokemon-sprites';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';
@Component({
  selector: 'app-sprites',
  templateUrl: './sprites.component.html',
  styleUrls: ['./sprites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpritesComponent implements OnInit {
  @Input() sprites:PokemonSprites;
  spriteInView:string;
  orientationToggled: string;
  colorToggled: string;
  orientationButtons: Array<string>;
  colorButtons: Array<string>;
  handleOrientationButtonClick(buttonClicked:string):void{
    this.setOrientationToggled(buttonClicked);
    this.updateSpriteInView();
  }
  handleColorButtonClick(buttonClicked:string):void{
    this.setColorToggled(buttonClicked);
    this.updateSpriteInView();
  }
  setColorToggled(_colorToggled): void{
    this.colorToggled = _colorToggled;
  }
  setOrientationToggled(_orientationToggled):void {
    this.orientationToggled = _orientationToggled;
  }
  updateSpriteInView(){
    this.spriteInView = this.sprites[`${this.orientationToggled.toLowerCase()}_${this.colorToggled.toLowerCase()}`];
  }
  initializeSpriteInView():void{
    this.spriteInView = this.sprites.front_default;
  } 
  constructor() {
    this.orientationButtons = ["front", "back"];
    this.colorButtons = ["default", "shiny"];
    this.orientationToggled = "front";
    this.colorToggled = "default";
   }
  ngOnChanges(): void {
    if(this.sprites !== undefined){
      this.initializeSpriteInView();
    }
  }
  ngOnInit(): void {
    
  }

}
