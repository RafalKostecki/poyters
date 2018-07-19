import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private categorySource = new BehaviorSubject<string>("Defalut");
  public category = this.categorySource.asObservable();

  constructor() { }

  public changeCategory(categoryName: string):void {
    this.categorySource.next(categoryName);
  }
}
