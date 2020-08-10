import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {
  newFeatureList:Array<string>;
  upcomingFeatureList:Array<string>;
  constructor() {
    this.newFeatureList = [
      "Pokemon Of The Day",
      "search all Pokemon by name",
      "Pokemon Stats",
      "Pokemon Info",
      "view Pokemon Sprites",
      "mobile support",
      "Pokemon moves learned"
  ]
    this.upcomingFeatureList = [
      "Pokemon Catch Location",
      "Pokemon ability info on click"
    ]
   }

  ngOnInit(): void {
  }

}
