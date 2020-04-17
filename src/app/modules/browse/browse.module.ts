import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { SearchControlsComponent } from '../browse/components/search-controls/search-controls.component';
import { CarouselButtonComponent } from '../../shared/components/carousel-button/carousel-button.component';
import { PageIndicatorComponent } from '../../shared/components/page-indicator/page-indicator.component';
import { IconButtonComponent } from '../../shared/components/icon-button/icon-button.component';

import { PokemonModule } from '../pokemon/pokemon.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    BrowsePageComponent,
    SearchControlsComponent,
    CarouselButtonComponent,
    PageIndicatorComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    PokemonModule,
    FormsModule,
    StoreModule.forFeature('browse', {} ),
  ],
  exports: [
    SearchControlsComponent
  ]
})
export class BrowseModule { }
