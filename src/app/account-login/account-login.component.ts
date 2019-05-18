import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../user'
import { AccountService } from '../account.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  user:User = { _id:'', username:'', email:'', password:'', wallet:'' }

  constructor(private accountService:AccountService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  tryLogin(): void {

    this.accountService.login(this.user).subscribe(user => {
      this.route.queryParams.subscribe(params => {
        this.router.navigate([params['returnUrl'] || 'account']);
      })
    })
  }

}