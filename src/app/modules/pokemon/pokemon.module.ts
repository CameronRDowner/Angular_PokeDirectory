import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControlsComponent } from './components/search-controls/search-controls.component';
import { SortingControlsComponent } from './components/sorting-controls/sorting-controls.component';
import { FilteringControlsComponent } from './components/filtering-controls/filtering-controls.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';
import { PokemonMoveComponent } from './components/pokemon-move/pokemon-move.component';
import { PokemonLocationComponent } from './components/pokemon-location/pokemon-location.component';
import { PokemonOfTheDayComponent } from './components/pokemon-of-the-day/pokemon-of-the-day.component'
import { BrowseComponent } from './pages/browse/browse.component';
import { DetailsComponent } from './pages/details/details.component';
import { TextButtonComponent } from '../../shared/components/text-button/text-button.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    SearchControlsComponent,
    SortingControlsComponent,
    FilteringControlsComponent,
    SearchResultComponent, 
    PokemonStatComponent, 
    PokemonMoveComponent, 
    PokemonLocationComponent, 
    BrowseComponent, 
    DetailsComponent,
    TextButtonComponent,
    PokemonOfTheDayComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
