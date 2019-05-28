import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  openOrders: Order[];
  user: User;

  newOrder = <Order> {
    user: "",
    type: "buy",
    qty: 10,
    price: 2,
    timestamp: "",
    done: false
  }

  constructor(private orderService: OrderService) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(localStorage);
  }

  ngOnInit() {
    this.getOrders();
    this.getOpenOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  getOpenOrders() {
    this.orderService.getOpenOrders().subscribe(orders => {
      this.openOrders = orders;
    })
  }

  handleSubmit(e) {
    this.newOrder.user = this.user._id;
    this.newOrder.timestamp = ""+new Date().getTime();
    this.orderService.placeOrder(this.newOrder).subscribe(res => {
      this.getOrders();
      this.getOpenOrders();
    });
  }

  selectTrade(trade) {
    console.log(trade);

    if(trade.type == "buy")
      alert("You are going to sell "+trade.qty+" AJKC\n\n BUY TRADE: "+trade.qty+" AJKC for "+trade.qty*trade.price+" EUR");
    else if(trade.type == "sell")
      alert("You are going to buy "+trade.qty+" AJKC\n\n SELL TRADE: "+trade.qty+" AJKC for "+trade.qty*trade.price+" EUR" );


    /* TODO:
     *  - transfer funds (add/substract from wallets)
     *  - set order to done and update timestamp.
     *
     */
  
  }

}
