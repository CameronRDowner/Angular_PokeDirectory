import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovesModule } from '../moves/moves.module'

import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';
import { PokemonMoveComponent } from './components/pokemon-move/pokemon-move.component';
import { PokemonLocationComponent } from './components/pokemon-location/pokemon-location.component';
import { PokemonOfTheDayComponent } from './components/pokemon-of-the-day/pokemon-of-the-day.component';
import { PokemonSearchResultComponent } from './components/pokemon-search-result/pokemon-search-result.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { TextButtonComponent } from 'src/app/shared/components/text-button/text-button.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { RadioClusterComponent } from '../../shared/components/radio-cluster/radio-cluster.component';
import { PokemonSpritesComponent } from './components/pokemon-sprites/pokemon-sprites.component';
import { SelectBoxComponent } from '../../shared/components/select-box/select-box.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';

@NgModule({
  declarations: [ 
    PokemonStatComponent, 
    PokemonMoveComponent, 
    PokemonLocationComponent, 
    PokemonOfTheDayComponent,
    PokemonSearchResultComponent,
    PokemonPageComponent,
    TextButtonComponent,
    PokemonTypeComponent,
    RadioClusterComponent,
    PokemonSpritesComponent,
    SelectBoxComponent,
    PokemonInfoComponent
  ],
  imports: [
    CommonModule,
    MovesModule
  ],
  exports: [
    PokemonOfTheDayComponent,
    TextButtonComponent,
    PokemonSearchResultComponent,
    RadioClusterComponent,
    SelectBoxComponent
  ]
})
export class PokemonModule { }
