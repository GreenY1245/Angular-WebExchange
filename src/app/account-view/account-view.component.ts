import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service'

import { User } from '../user'

import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js'
import { Color, Label } from 'ng2-charts'

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  user:User = {_id:'', username:'', email:'', password:'', wallet:'', public:'', private:'', credit:0, lastWalletBlock:''};
  wallet:any = { wallet:'', ammount:0 };
  exchange:number[] = [];
  total:number = 0;
  destinationWallet:string = '';
  destinationAmmount:number = 0;
  exchangeResult:boolean = null;

  constructor(private accountService:AccountService, private router:Router) {}

  ngOnInit() {

    if (!this.isLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.getWalletBlock();
    }

    this.getExchangeData();
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  getWalletBlock() {

    //console.log(this.user.lastWalletBlock)

    this.accountService.getWalletBlock(this.user.lastWalletBlock).subscribe(wallet => {
      this.wallet = wallet;
    })
  }

  purchaseCoins() {

    this.accountService.purchaseCoins(this.total, this.user).subscribe(user => {
      this.user = user;
    })
  }

  exchangeCoins() {

    this.accountService.exchange(this.user, this.destinationWallet, this.destinationAmmount).subscribe(user => {
      this.user = user;
      this.exchangeResult = true;
      console.log(this.exchangeResult);
    })
  }

  getExchangeData() {


    let date = new Date();
    date.setDate(date.getDate() - 6)

    for (let i = 6; i >= 0; i--) {

      this.accountService.getExchangeData(date.toISOString().substring(0, 10)).subscribe(exchange => {
        this.lineChartData[0].data.push(exchange.rates.USD);
      });

      date.setDate(date.getDate() + 1);
    }

    /*
    this.exchange = [
      1.120926,
      1.119344,
      1.120649,
      1.120649,
      1.118412,
      1.115505,
      1.11657
    ]
    */
    

    this.populateChartData();
  }

  populateChartData() {

    let date = new Date();
    date.setDate(date.getDate() - 6);

    for (let i = 6; i >= 0; i--) {

      this.lineChartLabels.push(date.toISOString().substring(0, 10))

      date.setDate(date.getDate() + 1);
    }
  
  }

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'USD to EUR Exchange rate' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: null
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
