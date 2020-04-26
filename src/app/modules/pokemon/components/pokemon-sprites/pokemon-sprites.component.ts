import { Component, OnInit, Input } from '@angular/core';
import { PokemonSprites } from '../../models/pokemon-sprites';
import { RadioCluster } from '../../../../shared/models/radio-cluster/radio-cluster';
@Component({
  selector: 'app-pokemon-sprites',
  templateUrl: './pokemon-sprites.component.html',
  styleUrls: ['./pokemon-sprites.component.scss']
})
export class PokemonSpritesComponent implements OnInit {
  @Input() sprites:PokemonSprites;
  spriteInView:string;
  orientationRadioCluster: any;
  colorRadioCluster: any;
  constructor() {
    this.orientationRadioCluster = new RadioCluster(["Front", "Back"], true);
    this.colorRadioCluster = new RadioCluster(["Default", "Shiny"], true);
   }

  ngOnInit(): void {
    this.spriteInView = this.sprites.front_default;
  }

}
