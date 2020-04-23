import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowsePageContainer } from './containers/browse-page/browse-page.container';
import { SearchControlsContainer } from './containers/search-controls/search-controls.container';
import { CarouselButtonComponent } from '../../shared/components/carousel-button/carousel-button.component';
import { PageIndicatorComponent } from '../../shared/components/page-indicator/page-indicator.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';
import { PokemonModule } from '../pokemon/pokemon.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/browse.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrowseEffects } from './state/browse.effects';

@NgModule({
  declarations: [
    BrowsePageContainer,
    SearchControlsContainer,
    CarouselButtonComponent,
    PageIndicatorComponent,
    IconButtonComponent
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
