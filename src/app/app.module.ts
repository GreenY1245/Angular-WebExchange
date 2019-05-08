import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountViewComponent } from './account-view/account-view.component';

import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
