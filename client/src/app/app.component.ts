import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})


export class AppComponent {

  //Alert types
  public notice = "notice";
  public warning = "warning";
  //Alert messages
  public warningMess1 = "Now are maintain works. Can occur unexpected errors.";
  public noticeMess1 = 'I wanna invite u to see my <a href="https://www.facebook.com/poyterskostecki">Facebook</a> page!';
  public token: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.token.subscribe(incomingToken => this.token = incomingToken)
  }

}
