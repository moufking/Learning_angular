import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {



   isAuth = false;

 appareils: any[];
 appareilSubscription: Subscription;



 constructor(private appareilservice: AppareilService ) {
   setTimeout(
() => {
  this.isAuth = true;
}, 4000
   );
 }
 onAlumer() {
   this.appareilservice.switchOnAll();
 }
 ngOnInit() {

  this.appareilSubscription = this.appareilservice.appareilSubdject.subscribe(
     (appareils: any[]) => {
       this.appareils = appareils;
     }
   );
   this.appareilservice.emitappareilsubject();


 }
 onEteindre() {
   this.appareilservice.switchOffAll();
 }

}
