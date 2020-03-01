import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class NegativeAuthGuard implements CanActivate {
  constructor(
    private userService: UserService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>  {
    const authRedirect: string = route.data.authRedirect;

    return this.userService.isLoggedIn().pipe(
      map(res => {
        if (res) {
          this.router.navigate([authRedirect]);
          return false;
        } else return true;
      }),
      catchError(() => {
        return of(true);
      })
    );
  }
}
