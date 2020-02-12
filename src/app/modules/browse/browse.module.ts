import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { SearchControlsComponent } from '../browse/components/search-controls/search-controls.component';

import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [
    HomePageComponent, 
    BrowsePageComponent,
    SearchControlsComponent
  ],
  imports: [
    CommonModule,
    PokemonModule
  ]
})
export class BrowseModule { }
