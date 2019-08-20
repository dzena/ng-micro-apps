import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule } from '../../projects/app1/src/app/app.module';
import { App2SharedModule } from '../../projects/app2/src/app/app.module';
import { NavComponent } from './nav/nav.component';

@NgModule( {
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // App1SharedModule.forRoot(),
    // App2SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule {
}
