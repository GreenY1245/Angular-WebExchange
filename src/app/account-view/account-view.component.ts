import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service'

import { User } from '../user'

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  user:User = {_id:'', username:'', email:'', password:'', wallet:'', public:'', private:'', credit:0, lastWalletBlock:''};
  wallet:any = { wallet:'', ammount:0 };
  exchange:any = {};

  constructor(private accountService:AccountService, private router:Router) {}

  ngOnInit() {

    if (!this.isLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.getWalletBlock();
    }
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  getWalletBlock() {

    console.log(this.user.lastWalletBlock)

    this.accountService.getWalletBlock(this.user.lastWalletBlock).subscribe(wallet => {
      this.wallet = wallet;
    })
  }

  getExchangeData() {

    this.accountService.getExchangeData().subscribe(exchange => {
      this.exchange = exchange;
    });
  }

}
