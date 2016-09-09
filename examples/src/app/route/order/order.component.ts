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

  public data = {
    foo: 'bar'
  }



  constructor(private activatedRoute: ActivatedRoute) { 
    console.log('Order constructed');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: {id: number}) => {
      console.log(data);
      this.orderNo = data.id
    });
    this.activatedRoute.queryParams.subscribe((data: any) => {
      console.log('Query params', data);

    });
    // this.orderNo = this.activatedRoute.snapshot.params['id'];
  }

  public toggle() {
    this.exact = !this.exact;
  }
}
