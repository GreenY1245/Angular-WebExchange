import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountViewComponent } from '../account-view/account-view.component'
import { LandingComponent } from '../landing/landing.component'
import { AccountLoginComponent } from '../account-login/account-login.component';
import { AccountRegisterComponent } from '../account-register/account-register.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AccountLogoutComponent } from '../account-logout/account-logout.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { OrdersComponent } from '../orders/orders.component';

const routes: Routes = [
  { path: 'account', component: AccountViewComponent },
  { path: 'user/:id', component: UserViewComponent },
  { path: 'login', component: AccountLoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'register', component: AccountRegisterComponent },
  { path: 'logout', component: AccountLogoutComponent },
  { path: '', component: LandingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
