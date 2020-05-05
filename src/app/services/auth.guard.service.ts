import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class Auth  implements CanActivate {

  constructor(private authservice: AuthService, private routes: Router) {

  }
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean>| boolean {
    if (this.authservice.isAuth) {
      return true;
    } else {
      this.routes.navigate(['/auth']);
    }
  }
}
