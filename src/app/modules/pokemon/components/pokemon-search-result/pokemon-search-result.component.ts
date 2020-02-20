import { Component, OnInit, Input } from '@angular/core';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search-result',
  templateUrl: './pokemon-search-result.component.html',
  styleUrls: ['./pokemon-search-result.component.scss']
})
export class PokemonSearchResultComponent implements OnInit {
  @Input() searchResult: NamedAPIResource;
  id:number;
  spriteUrl:string;
  private extractId(){
    const idString = this.searchResult.url.substring(34,this.searchResult.url.length -1);
    return parseInt(idString, 10);
  }
  private generateSpriteUrl(){
  const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const fileExtension = ".png"
  return baseUrl + this.id.toString() + fileExtension;
  }
  openPokemonPage(){
    this.router.navigate(['/pokemon', this.id]);
  }
  constructor(private router: Router) {

   }

  ngOnInit(): void {
    this.id = this.extractId();
    this.spriteUrl = this.generateSpriteUrl();
  }

}
