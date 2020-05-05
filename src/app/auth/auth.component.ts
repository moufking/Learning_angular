import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

authstatus: boolean;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  this.authstatus = this.authservice.isAuth;
  }

  onSignup() {
    this.authservice.signIn().then(
      () => {
      this.authstatus = this.authservice.isAuth;
      this.router.navigate(['appareils']);
      console.log('ok');
      }
  ); }
  onSignOut() {
  this.authservice.signOut();
  this.authstatus = this.authservice.isAuth;
  }

}
