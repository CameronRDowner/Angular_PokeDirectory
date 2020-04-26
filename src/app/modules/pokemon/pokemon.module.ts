import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './components/stats/stats.component';
import { MoveComponent } from './components/move/move.component';
import { MovesetComponent } from './components/moveset/moveset.component';
import { CatchLocationComponent } from './components/catch-location/catch-location.component';
import { PokemonOfTheDayComponent } from './components/pokemon-of-the-day/pokemon-of-the-day.component';
import { PokemonSearchResultComponent } from './components/pokemon-search-result/pokemon-search-result.component';
import { PokemonContainer } from './containers/pokemon/pokemon.container';
import { TextButtonComponent } from 'src/app/shared/components/text-button/text-button.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { RadioClusterComponent } from '../../shared/components/radio-cluster/radio-cluster.component';
import { SpritesComponent } from './components/sprites/sprites.component';
import { SelectBoxComponent } from '../../shared/components/select-box/select-box.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';

@NgModule({
  declarations: [ 
    StatsComponent, 
    MoveComponent,
    MovesetComponent, 
    CatchLocationComponent, 
    PokemonOfTheDayComponent,
    PokemonSearchResultComponent,
    PokemonContainer,
    TextButtonComponent,
    PokemonTypeComponent,
    RadioClusterComponent,
    SpritesComponent,
    SelectBoxComponent,
    PokemonInfoComponent,
    AbilitiesComponent
  ],
  imports: [
    CommonModule
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
