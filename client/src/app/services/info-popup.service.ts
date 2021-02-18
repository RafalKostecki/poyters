import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPopupService {

  public infoContent = new BehaviorSubject<string>("Unknown");
  public isActive = new BehaviorSubject<boolean>(false);

  public setIsActive(isActive: boolean): void {
    console.log('setIsActive')
    this.isActive.next(isActive);
  }

  public setInfoContent(content: string): void {
    this.infoContent.next(content);
  }
}
