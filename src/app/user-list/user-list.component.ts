import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
users: User[];
subscription: Subscription;


  constructor( private userservice: UserService) { }

  ngOnInit() {
    this.subscription = this.userservice.usersubject.subscribe(
      (users: User[]) => {
        this.users = users;
        // console.log(this.users);
      }
    );
    this.userservice.emitUser();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
