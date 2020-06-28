import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowseModule } from '../browse/browse.module';
import { PokemonModule } from '../pokemon/pokemon.module';


import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeContainer } from './containers/home/home.container';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeContainer
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
