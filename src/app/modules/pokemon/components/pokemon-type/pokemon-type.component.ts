import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent implements OnInit {
  typeColors: string;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
