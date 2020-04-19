import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowseModule } from '../browse/browse.module';
import { PokemonModule } from '../pokemon/pokemon.module';


import { NavbarComponent } from './components/navbar/navbar.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PokemonModule,
    BrowseModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class MainModule { }
