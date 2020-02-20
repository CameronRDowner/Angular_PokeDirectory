import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/browse/pages/home-page/home-page.component'
import { BrowsePageComponent } from './modules/browse/pages/browse-page/browse-page.component';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';
import { Pokemon } from './modules/pokemon/models/pokemon/pokemon';


const routes: Routes = [
{path: '',  component: HomePageComponent,},
{path: 'browse', component: BrowsePageComponent},
{path: 'pokemon/:id', component: PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
