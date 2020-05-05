import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() IndexOffappareil: number;
@Input() id: number;
  constructor(private appareilService: AppareilService ) { }

  ngOnInit() {

  }
  getStatus() {
  return this.appareilStatus;
  }

  getcolor() {
  if (this.appareilStatus == 'allumer') {
      return 'green';
     } else if (this.appareilStatus == 'eteint') {
          return 'red'; }
  }

  SwitchOne() {
    this.appareilService.switchOne(this.IndexOffappareil);
  }
  SwitchOff() {
    this.appareilService.OffOne(this.IndexOffappareil);
  }

}
