import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Driver } from '../driver';
import { F1AutoRefreshService } from '../f1.service';

@Component({
  selector: 'app-auto-refresh',
  templateUrl: './auto-refresh.component.html',
  styleUrls: ['./auto-refresh.component.css']
})
export class AutoRefreshComponent implements OnDestroy {

   drivers: Driver[];

  private subscription: Subscription;

  constructor(private service: F1AutoRefreshService) {
    // Should unsubscribe this, ellse we'll have a memory leak'
    this.subscription = service.getDrivers().subscribe(drivers => {
      console.log('Updating drivers array with new drivers');
      this.drivers = drivers
    });
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   addSubscribtion() {
    this.service.getDrivers().subscribe(drivers => console.log(`Found ${drivers.length} drivers`));
  }

}
