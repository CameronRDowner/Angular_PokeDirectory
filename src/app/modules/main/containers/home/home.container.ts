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
      "view Pokemon Sprites",
      "Pokemon moves learned",
      "Pokemon Catch Location"
  ]
    this.upcomingFeatureList = [
      "Pokemon ability info on mouseover or click",
      "Pokemon catch info on mouseover or click",
      "Pokemon TM and HM moveList"
    ]
   }

  ngOnInit(): void {
  }

}
