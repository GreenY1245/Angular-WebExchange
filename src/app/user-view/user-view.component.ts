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

  getWalletBlock() {

    this.accountService.getWalletBlock(this.user.wallet).subscribe(wallet => {
      this.wallet = wallet;
    })
  }

}
