import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppareilService} from './services/appareil.service';
import { Observable, of, interval, Subscription } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
second: number;
counterSubscription: Subscription;
  ngOnInit() {
    const counter = interval(1000);

    const subscrber = {
    next: (value: number) => {
      this.second = value;
    },
    error: () => {
        console.log('une erreur produit');
    },
    complete: () => {
        console.log('Operation fini');
    }

    };

    this.counterSubscription = counter.subscribe(subscrber); }
    ngOnDestroy () {
      this.counterSubscription.unsubscribe();
    }

}
