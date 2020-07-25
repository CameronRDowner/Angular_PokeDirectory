import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slide', [
      state('false', style({
        transform: 'translateX(5rem)',
        opacity: 0
      })),
      state('true', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('true <=> false', animate('200ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  linksVisible:boolean;
  hamburgerMenuIconClasses: string;
  navigateBrowseAllPokemon():void{
    this.router.navigate(['browse'], {queryParams:{ list: 'pokemon'}})
  }
  toggleNavLinks():void{
    this.linksVisible = !this.linksVisible;
  }
  handleClickedOutside():void{
    if(this.linksVisible){
      this.toggleNavLinks();
    }
  }
  handleLinkClick():void{
    if(this.checkIfMobileWidth()){
      this.toggleNavLinks();
    }
    this.navigateBrowseAllPokemon();
  }
  checkIfMobileWidth():boolean{
    if(window.innerWidth <= 700){
      return true;
    }
    else{
      return false;
    }
  }
  constructor(private router: Router) {
    this.hamburgerMenuIconClasses = "fa fa-bars"
   }

  ngOnInit(): void {
    if(this.checkIfMobileWidth()){
      this.linksVisible = false
    }
    else{
      this.linksVisible = true
    }
  }

}
