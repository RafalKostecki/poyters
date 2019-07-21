import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})


export class AppComponent {

  //Alert types
  public notice: string = "notice";
  public warning: string = "warning";
  //Alert messages
  public warningMess1: string = "Now are maintain works. Can occur unexpected errors.";
  public noticeMess1: string = 'I wanna invite u to see my <a href="https://www.facebook.com/poyterskostecki">Facebook</a> page!';

  constructor() {
  }

}
