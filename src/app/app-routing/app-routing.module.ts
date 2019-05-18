import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountViewComponent } from '../account-view/account-view.component'
import { LandingComponent } from '../landing/landing.component'
import { AccountLoginComponent } from '../account-login/account-login.component';
import { AccountRegisterComponent } from '../account-register/account-register.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: 'account', 
    children : [
      { path: '', pathMatch: 'full', component: AccountViewComponent },
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent }
    ]
  },
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
