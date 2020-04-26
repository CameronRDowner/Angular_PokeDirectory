import { Component, OnInit, Input } from '@angular/core';
import { PokemonMove } from '../../../../shared/models/pokemon-move';
import { MovesService } from '../../moves.service';
import { Move } from '../../models/move';
import { takeUntil, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-moveset',
  templateUrl: './moveset.component.html',
  styleUrls: ['./moveset.component.scss']
})
export class MovesetComponent implements OnInit {
  @Input() inputPokemonMoves:PokemonMove[];
  moveLists:any;
  currentList:string;
  initializeMoveLists(){

  }
  setMoveLists(){
    this.inputPokemonMoves.map(move=>{ move.version_group_details.map(game =>{
      if(game.move_learn_method.name === "level-up" && game.version_group.name in this.moveLists){
        this.moveLists[game.version_group.name].push({levelLearnedAt: game.level_learned_at, move: this.movesService.getMove(move.move.name)})
      }
    })
    })
    console.log(this.moveLists);
  }
  sortMoveListsByLevel(){

  }
  setCurrentList(){
    for(let game in this.moveLists){
      if(this.moveLists[game].length !== 0){
        this.currentList = game;
        break;
      }
    }
  }
  constructor(private movesService:MovesService) {
    this.moveLists = {
      "red-blue":[],
      "yellow":[],
      "gold-silver":[],
      "crystal":[],
      "ruby-sapphire":[],
      "emerald":[],
      "firered-leafgreen":[],
      "diamond-pearl":[],
      "platinum":[],
      "heartgold-soulsilver":[],
      "black-white":[],
      "black-2-white-2":[],
      "x-y":[],
      "omega-ruby-alpha-sapphire":[],
      "sun-moon":[],
      "ultra-sun-ultra-moon":[]
    }
  }
  ngOnInit(): void {
    this.setMoveLists();
    this.setCurrentList();  
  }

}
