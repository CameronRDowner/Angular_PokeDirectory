import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokemon/pokemon.service';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { BrowseService } from '../../browse.service';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit {
  private allPokemonOffset:number;
  resultsInView:NamedAPIResource[];
  private initializeResultsInView(){
    if(this.browseService.searchTerm === ""){
      this.resultsInView = this.pokemonService.getAllPokemon();
    }
    else{
      this.searchList();
    }
    console.log(this.resultsInView)
  }
  private searchList():NamedAPIResource[]{
    let listToSearch; 
    if(this.browseService.searchList === 'allPokemon'){
      listToSearch = this.pokemonService.getAllPokemon();
    }
    let searchTerm = this.browseService.searchTerm;
    let searchResults = listToSearch.filter(item => 
      item.name.toLowerCase().includes(searchTerm));
      console.log(searchResults);
  }
  constructor(private pokemonService:PokemonService, private browseService:BrowseService) {
    this.initializeResultsInView();
   }

  ngOnInit(): void {

  }

}
