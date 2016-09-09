import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {

  public orderNo: number;
  public exact = false;

  public param1 = {
    foo: 'bar',
    value: 17
  };

  public param2 = this;

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('Order constructed');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {orderId: number}) => this.orderNo = data.orderId);
  }

  public toggle() {
    this.exact = !this.exact;
  }
}
