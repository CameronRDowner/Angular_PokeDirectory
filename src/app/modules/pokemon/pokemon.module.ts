import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatListComponent } from './components/stat-list/stat-list.component';
import { PokemonOfTheDayComponent } from './components/pokemon-of-the-day/pokemon-of-the-day.component';
import { PokemonSearchResultComponent } from './components/pokemon-search-result/pokemon-search-result.component';
import { PokemonContainer } from './containers/pokemon/pokemon.container';

import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { RadioClusterComponent } from '../../shared/components/radio-cluster/radio-cluster.component';
import { SpritesComponent } from './components/sprites/sprites.component';
import { SelectBoxComponent } from '../../shared/components/select-box/select-box.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { AbilityComponent } from './components/ability/ability.component';
import { StatComponent } from './components/stat/stat.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/pokemon.reducer';
import { PokemonEffects } from './state/pokemon.effects';
import { EffectsModule } from '@ngrx/effects';

import { ReversePipe } from '../../shared/pipes/reverse-array.pipe';
import { ReplaceDashPipe } from '../../shared/pipes/replace-dash-string';
import { KeysArrayPipe } from '../../shared/pipes/keys-array.pipe';
import { AbbrevSpecialStringPipe } from './pipes/abbrev-special-string.pipe';
import { TrimNameStringPipe } from './pipes/trim-name-string.pipe';
import { ClickedOutsideDirective } from '../../shared/directives/clicked-outside.directive';

@NgModule({
  declarations: [
    StatListComponent,
    PokemonOfTheDayComponent,
    PokemonSearchResultComponent,
    PokemonContainer,
    PokemonTypeComponent,
    RadioClusterComponent,
    SpritesComponent,
    SelectBoxComponent,
    PokemonInfoComponent,
    AbilityComponent,
    StatComponent,
    ReversePipe,
    ReplaceDashPipe,
    KeysArrayPipe,
    AbbrevSpecialStringPipe,
    IconButtonComponent,
    TrimNameStringPipe,
    ClickedOutsideDirective
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
    PokemonSearchResultComponent,
    RadioClusterComponent,
    SelectBoxComponent,
    IconButtonComponent,
    TrimNameStringPipe,
    ClickedOutsideDirective
  ]
})
export class PokemonModule { }
