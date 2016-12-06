import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { TimerService } from '../timer.service';

@Component({
  selector: 'app-wrap-api',
  templateUrl: './wrap-api.component.html',
  styleUrls: ['./wrap-api.component.css'],
  providers: [TimerService]
})
export class WrapApiComponent implements OnDestroy {

  public subscription:Subscription;
  public date: Date;

  constructor(service: TimerService) {
     this.subscription = service.timer.subscribe(date => this.date = date);
  }

  ngOnDestroy() {
    // this.stop();
  }

  public stop() {
    this.subscription.unsubscribe();
  }

}
