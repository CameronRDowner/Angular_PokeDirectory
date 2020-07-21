import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navigateBrowseAllPokemon():void{
    this.router.navigate(['browse'], {queryParams:{ list: 'pokemon'}})
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
