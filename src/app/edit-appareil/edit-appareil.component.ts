import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultonstatus = 'eteint';
  token: string;
  constructor( private appareilservice: AppareilService , private authservice: AuthService ,private router: Router) { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value.name;
    const status = form.value.status;
    this.appareilservice.addappareil(name, status);
    this.router.navigate(['/appareils']);
  }
  seetoken() {
    this.authservice.seetoken();
  }
  inscription(form: NgForm) {
    console.log(form.value);
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;

/*
    this.authservice.subs(form.value).subscribe(
        (value) => {
          // tslint:disable-next-line:no-unused-expression
          this.token = value['token'];

           console.log(this.authservice.saveToken(this.token));
          // console.log(this.token );
        },
        (error) => {
          console.log(error);
        }
          );
          */
  }

}
