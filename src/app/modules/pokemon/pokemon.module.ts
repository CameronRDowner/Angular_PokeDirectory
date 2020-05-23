import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatListComponent } from './components/stat-list/stat-list.component';
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
import { AbilityComponent } from './components/ability/ability.component';
import { StatComponent } from './components/stat/stat.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/pokemon.reducer';
import { PokemonEffects } from './state/pokemon.effects';
import { EffectsModule } from '@ngrx/effects';

import { ReversePipe } from '../../shared/pipes/reverse-array.pipe';
import { ReplaceDashPipe } from '../../shared/pipes/replace-dash-string';
import { KeysArrayPipe } from '../../shared/pipes/keys-array.pipe';

@NgModule({
  declarations: [
    StatListComponent, 
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
    AbilityComponent,
    StatComponent,
    ReversePipe,
    ReplaceDashPipe,
    KeysArrayPipe
  ],
  imports: [
    StoreModule.forFeature('pokemon', reducer),
    EffectsModule.forFeature(
      [ PokemonEffects ]
    ), 
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
