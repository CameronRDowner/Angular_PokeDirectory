import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowseContainer } from './containers/browse/browse.container';
import { SearchControlsContainer } from './containers/search-controls/search-controls.container';
import { CarouselButtonComponent } from '../../shared/components/carousel-button/carousel-button.component';
import { PageIndicatorComponent } from '../../shared/components/page-indicator/page-indicator.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TextboxComponent } from '../../shared/components/textbox/textbox.component';
import { AlertModalComponent } from '../../shared/components/alert-modal/alert-modal.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/browse.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrowseEffects } from './state/browse.effects';

@NgModule({
  declarations: [
    BrowseContainer,
    SearchControlsContainer,
    CarouselButtonComponent,
    PageIndicatorComponent,
    IconButtonComponent,
    TextboxComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    PokemonModule,
    FormsModule,
    StoreModule.forFeature('browse', reducer),
    EffectsModule.forFeature(
      [BrowseEffects]
    )
  ],
  exports: [
    SearchControlsContainer
  ]
})
export class BrowseModule { }
