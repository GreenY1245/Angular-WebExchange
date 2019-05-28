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
import { UserViewComponent } from './user-view/user-view.component';

import { ChartsModule } from 'ng2-charts';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountViewComponent,
    LandingComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    NotFoundComponent,
    AccountLogoutComponent,
    UserViewComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
