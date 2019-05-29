import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user:User = { _id:'', username:'', email:'', password:'', wallet:'', public:'', private:'', credit:0, lastWalletBlock:'' }
  wallet:any = { wallet:'', ammount:0 }
  ammount:number = 0;
  exchangeResult:boolean = false;

  constructor(private accountService:AccountService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.getUser();
  }

  getUser() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.accountService.getUser(id).subscribe(user => {
      this.user = user
      this.getWalletBlock();
    });

  }

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('user'))
  }

  getWalletBlock() {

    this.accountService.getWalletBlock(this.user.lastWalletBlock).subscribe(wallet => {
      this.wallet = wallet;
    })
  }

  exchangeCoins() {

    const loggedInUser = this.getLoggedInUser();

    if (loggedInUser) {
      this.accountService.exchange(this.getLoggedInUser(), this.wallet.wallet, this.ammount).subscribe(user => {
        this.user = user;
        this.exchangeResult = true;
      })
    } else {
      this.router.navigate(['login']);
    }
  }

}
