import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService  implements OnInit {
  isAuth = false;
  token: string;


  constructor( private httpclient: HttpClient) {
  }

  ngOnInit() {
    console.log(this.token);
  }

signIn() {
  return new Promise(

      (resolve, reject) => {
      setTimeout(
      () => {
      this.isAuth = true;
      resolve(true); }, 2000);
      });
    }
  signOut() {
  this.isAuth = false;
  }

  seetoken() {
    console.log(this.token);
  }
  subs(obj: object) {
      this.httpclient.post('http://localhost:8000/api/register', obj).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.error);
        }
      );
  }


  saveToken(token) {
     localStorage.setItem('Bearer', token);
  }
}
