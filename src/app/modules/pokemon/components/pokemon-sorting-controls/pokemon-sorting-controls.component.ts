import { Component, OnInit, Output } from '@angular/core';
import { TextButton } from 'src/app/shared/models/text-button/text-button';
import { EventEmitter } from '@angular/core/';

@Component({
  selector: 'app-pokemon-sorting-controls',
  templateUrl: './pokemon-sorting-controls.component.html',
  styleUrls: ['./pokemon-sorting-controls.component.scss']
})
export class PokemonSortingControlsComponent implements OnInit {
  @Output() idSortClick = new EventEmitter();
  @Output() nameSortClick = new EventEmitter();

  nameSortButton:TextButton;
  idSortButton:TextButton;
  nameSortButtonToggled:boolean;
  idSortButtonToggled:boolean;
  handleNameSortClick(){
    if(this.nameSortButtonToggled === false){
      this.nameSortButtonToggled = true;
      this.idSortButtonToggled = false;
      this.emitNameSortClick();
    }
    else{
      return
    }
  }
  handleIdSortClick(){
    if(this.idSortButtonToggled === false){
      this.idSortButtonToggled = true;
      this.nameSortButtonToggled = false;
      this.emitIdSortClick();
    }
    else{
      return
    }
  }
  emitNameSortClick(){
    this.nameSortClick.emit(null);
  }
  emitIdSortClick(){
    this.idSortClick.emit(null);
  }

  constructor() {
    this.nameSortButton = new TextButton("Name", "#ffffff", "#730104");
    this.idSortButton = new TextButton("Id", "#ffffff", "#730104");
    this.nameSortButtonToggled = false;
    this.idSortButtonToggled = true;
   }

  ngOnInit(): void {
  }

}
