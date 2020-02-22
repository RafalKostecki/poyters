import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token = new BehaviorSubject<string>('');

  public changeToken(newToken: string):void {
    this.token.next(newToken);
  }
}
