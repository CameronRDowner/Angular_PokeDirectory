import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovesModule } from '../moves/moves.module'

import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';
import { PokemonMoveComponent } from './components/pokemon-move/pokemon-move.component';
import { PokemonLocationComponent } from './components/pokemon-location/pokemon-location.component';
import { PokemonOfTheDayComponent } from './components/pokemon-of-the-day/pokemon-of-the-day.component';
import { PokemonSearchResultComponent } from './components/pokemon-search-result/pokemon-search-result.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonSortingControlsComponent } from './components/pokemon-sorting-controls/pokemon-sorting-controls.component';
import { TextButtonComponent } from 'src/app/shared/components/text-button/text-button.component';

@NgModule({
  declarations: [ 
    PokemonStatComponent, 
    PokemonMoveComponent, 
    PokemonLocationComponent, 
    PokemonOfTheDayComponent,
    PokemonSearchResultComponent,
    PokemonPageComponent,
    PokemonSortingControlsComponent,
    TextButtonComponent
  ],
  imports: [
    CommonModule,
    MovesModule
  ],
  exports: [
    PokemonOfTheDayComponent,
    TextButtonComponent,
    PokemonSearchResultComponent,
    PokemonSortingControlsComponent
  ]
})
export class PokemonModule { }
