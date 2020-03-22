import { Component, OnInit } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  openBrowsePage(){
    this.router.navigate(['browse'])
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
