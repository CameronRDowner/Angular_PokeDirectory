import { Component, OnInit, Input } from '@angular/core';
import { NamedAPIResource } from 'src/app/shared/models/named-api-resource/named-apiresource';

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
    const substringEnd = this.searchResult.url.indexOf("/", 34);
    const idString = this.searchResult.url.substring(34,substringEnd);
    return parseInt(idString, 10);
  }
  private generateSpriteUrl(){
  const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const fileExtension = ".png"
  return baseUrl + this.id.toString() + fileExtension;
  }
  constructor() {

   }

  ngOnInit(): void {
    this.id = this.extractId();
    this.spriteUrl = this.generateSpriteUrl();
  }

}
