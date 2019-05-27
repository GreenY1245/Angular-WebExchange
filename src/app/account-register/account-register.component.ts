import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  user:User = { _id:'', username:'', email:'', password:'', wallet:'', public:'', private:'' }

  constructor(private accountService:AccountService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  tryRegister(): void {

    this.accountService.register(this.user).subscribe(user => {
      
      this.route.queryParams.subscribe(params => {
        this.router.navigate([params['returnUrl'] || 'login']);
      })
    })
  }

}
