import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/main/pages/home-page/home-page.component'
import { BrowsePageContainer } from './modules/browse/containers/browse-page/browse-page.container';
import { PokemonPageComponent } from './modules/pokemon/pages/pokemon-page/pokemon-page.component';


const routes: Routes = [
{path: '',  component: HomePageComponent,},
{path: 'browse', component: BrowsePageContainer},
{path: 'pokemon/:id', component: PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
