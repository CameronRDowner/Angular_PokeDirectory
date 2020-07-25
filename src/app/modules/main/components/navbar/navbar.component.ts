import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ opacity: 1, transform: 'translateX(-50px)' })),
      state('false', style({ opacity: 0, transform: 'translateX(0)' })),
      transition('false <=> true', animate('0.2s ease-in'))
    ]),
    trigger('fadeInY', [
      transition('void => *', [ 
      style({ 
          opacity: 0,
          transform: 'translateY(-50px)'
        }),
        animate('0.2s ease-out', 
        style({ 
          opacity: 1,
          transform: 'translateY(0)' 
        }))
      ]),
      transition('* => void', [
        animate('0.2s ease-in', 
        style({ 
          opacity: 0,
          transform: 'translateY(-50px)' 
        }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  linksVisible:boolean;
  hamburgerMenuIconClasses: string;
  navigateBrowseAllPokemon():void{
    this.router.navigate(['browse'], {queryParams:{ list: 'pokemon'}})
  }
  toggleMobileNav():void{
    this.linksVisible = !this.linksVisible;
  }
  handleClickedOutside():void{
    if(this.linksVisible){
      this.toggleMobileNav();
    }
  }
  constructor(private router: Router) {
    this.hamburgerMenuIconClasses = "fa fa-bars"
    this.linksVisible = true;
   }

  ngOnInit(): void {
  }

}
