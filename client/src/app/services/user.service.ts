import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userId = new BehaviorSubject<string>('');

  public setUserId(newId: string):void {
    this.userId.next(newId);
  }

  public username = new BehaviorSubject<string>('');

  public setUsername(newUsername: string):void {
    this.username.next(newUsername);
  }
}
