import { Component, OnInit } from '@angular/core';
import { PokemonSearchService } from 'src/app/services/pokemon-search.service';
import { NamedAPIResourceList } from 'src/app/models/named-apiresource-list';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {
  allPokemon:NamedAPIResourceList;
  constructor(private pokemonSearchService: PokemonSearchService) { }

  ngOnInit() {
    this.pokemonSearchService.getAllPokemon().forEach(_allPokemon => {this.allPokemon = _allPokemon})
  }

}
