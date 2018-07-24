import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})


export class AppComponent {

  public warning: string = "Now are maintain works. Can occur unexpected errors.";
  
  constructor() {
  }

}