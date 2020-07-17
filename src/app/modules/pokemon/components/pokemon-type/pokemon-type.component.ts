import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  typeColors: Object;
  @Input() typeName: string;
  @Input() size: string;

  getSizeClass():string {
    if(this.size === "small"){
      return "pokemon-type--wrapper--small"
    }
    else{
      return "pokemon-type--wrapper--medium"
    }
  }
  constructor() {
    this.typeColors = {
      fire: "#FF8024",
      flying: "#CCBFF2",
      normal: "#A9A878",
      fairy: "#E8ACE7",
      fighting: "#C74A43",
      ghost: "#7F6D9B",
      electric: "#F9D130",
      steel: "#C1C1C1",
      psychic: "#F66D96",
      dark: "#887869",
      dragon: "#936DF5",
      rock: "#B6A038",
      bug: "#A7B91E",
      ground: "#DFC069",
      poison: "#A673A5",
      ice: "#98D8D7",
      grass: "#7EAD67",
      water: "#6C91F3"
    }
    this.size = "medium"
   }

  ngOnInit(): void {
  }

}
