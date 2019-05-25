import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AccountViewComponent } from './account-view/account-view.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { NotFoundComponent } from './not-found/not-found.component'

import { HttpClientModule } from '@angular/common/http';
import { AccountLogoutComponent } from './account-logout/account-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent,
    LandingComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    NotFoundComponent,
    AccountLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
