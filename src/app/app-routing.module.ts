import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/main/pages/home-page/home-page.component'
import { BrowseContainer } from './modules/browse/containers/browse/browse.container';
import { PokemonContainer } from './modules/pokemon/containers/pokemon/pokemon.container';


const routes: Routes = [
{path: '',  component: HomePageComponent,},
{path: 'browse', component: BrowseContainer,},
{path: 'pokemon/:id', component: PokemonContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
