import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private categorySource = new BehaviorSubject<string>("Unknown");
  public category = this.categorySource.asObservable();

  constructor() { }

  public changeCategory(categoryName: string):void {
    this.categorySource.next(categoryName);
  }
}
