import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './modules/main/containers/home/home.container';
import { BrowseContainer } from './modules/browse/containers/browse/browse.container';
import { PokemonContainer } from './modules/pokemon/containers/pokemon/pokemon.container';


const routes: Routes = [
{path: '',  component: HomeContainer, data:{ animation:'isLeft' }},
{path: 'browse', component: BrowseContainer },
{path: 'pokemon/:id', component: PokemonContainer, data:{ animation: 'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
