import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { map, catchError} from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean>  {
    return this.userService.isLoggedIn().pipe(
      map(res => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/signin']);
        return of(false);
      })
    );
  }
}
