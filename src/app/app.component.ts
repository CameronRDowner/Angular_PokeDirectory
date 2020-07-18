import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slide } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slide ]
})
export class AppComponent {
  title = 'angular-pokedex';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor(){}

  ngOnInit(){
  }
}
