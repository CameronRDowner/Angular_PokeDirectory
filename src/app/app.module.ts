import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { PageFooterComponent } from './shared/components/page-footer/page-footer.component';

import { BrowseModule } from './modules/browse/browse.module';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
