import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowsePageComponent } from './pages/browse-page/browse-page.component';
import { SearchControlsComponent } from '../browse/components/search-controls/search-controls.component';
import { CarouselButtonComponent } from '../../shared/components/carousel-button/carousel-button.component';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [
    HomePageComponent, 
    BrowsePageComponent,
    SearchControlsComponent,
    CarouselButtonComponent
  ],
  imports: [
    CommonModule,
    PokemonModule,
    FormsModule
  ]
})
export class BrowseModule { }
