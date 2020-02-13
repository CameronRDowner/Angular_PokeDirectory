import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/browse/pages/home-page/home-page.component'
import { BrowsePageComponent } from './modules/browse/pages/browse-page/browse-page.component';


const routes: Routes = [
{path: '',  component: HomePageComponent,},
{path: 'browse', component: BrowsePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
