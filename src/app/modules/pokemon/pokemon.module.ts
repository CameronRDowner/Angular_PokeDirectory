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
import { StatComponent } from './components/stat/stat.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { PickerComponent } from '../../shared/components/picker/picker.component';

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
import { TextButtonComponent } from '../../shared/components/text-button/text-button.component';
import { ListboxComponent } from '../../shared/components/listbox/listbox.component';
import { TruncateEllipsisStringPipe } from '../../shared/pipes/truncate-ellipsis-string.pipe';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MoveComponent } from './components/move/move.component';
import { ConcatPercentStringPipe } from '../../shared/pipes/concat-percent-string.pipe';
import { DamageClassComponent } from './components/damage-class/damage-class.component';
import { SortByLevelArrayPipe } from './pipes/sort-by-level-array.pipe';
import { CatchLocationComponent } from './components/catch-location/catch-location.component';

@NgModule({
  declarations: [
    PickerComponent,
    StatListComponent,
    PokemonOfTheDayComponent,
    PokemonSearchResultComponent,
    PokemonContainer,
    PokemonTypeComponent,
    RadioClusterComponent,
    SpritesComponent,
    SelectBoxComponent,
    PokemonInfoComponent,
    StatComponent,
    ReversePipe,
    ReplaceDashPipe,
    KeysArrayPipe,
    AbbrevSpecialStringPipe,
    IconButtonComponent,
    TrimNameStringPipe,
    ClickedOutsideDirective,
    TextButtonComponent,
    ListboxComponent,
    TruncateEllipsisStringPipe,
    MoveComponent,
    MoveListComponent,
    ConcatPercentStringPipe,
    DamageClassComponent,
    SortByLevelArrayPipe,
    CatchLocationComponent
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
