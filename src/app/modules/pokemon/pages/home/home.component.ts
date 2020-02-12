import { Component, OnInit } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button'; 
import { PokemonService } from '../../pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchButton: TextButton;
  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {
    this.searchButton = new TextButton('Search');
  }
  

}
